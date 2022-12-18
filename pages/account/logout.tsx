import Link from "next/link";
import { useContext, useEffect } from "react"
import PocketbaseContext from "../../modules/PocketbaseContext"

export default function Logout() {
    const pbContext = useContext(PocketbaseContext);

    useEffect(() => {
        pbContext.authStore.clear();
    })
    return(
        <h1>You have logged out. <Link href="/account/login">Log back in here.</Link></h1>
    )
}