import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useRef, useState } from 'react';
import PocketbaseContext from '../modules/PocketbaseContext';
import Link from 'next/link';
import PocketBase from 'pocketbase';
import NavBar from '../modules/ui/NavBar';

const pb = new PocketBase("http://localhost:8090");
export default function App({ Component, pageProps }: AppProps) {
  const [signedIn, setIsSignedIn] = useState(false);
  const updateLoginStatus = () => {
    setIsSignedIn(!pb.authStore.token == null);
  }
  const alertRef = useRef(null);
  // pb.authStore.onChange(updateLoginStatus, true);

  return (
    <PocketbaseContext.Provider value={pb}>
      <>
        <div ref={alertRef}></div>
        <NavBar loggedIn={signedIn} />
        <Component {...pageProps} />
      </>
    </PocketbaseContext.Provider>)
}
