import { useContext } from "react";
import PocketbaseContext from "../PocketbaseContext";

export default function useUser() {
    const {authStore} = useContext(PocketbaseContext);
    return authStore.model;
}