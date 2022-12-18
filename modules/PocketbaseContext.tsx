import React from 'react';
import PocketBase from 'pocketbase';

const PocketbaseContext = React.createContext<PocketBase>(null);

export default PocketbaseContext;