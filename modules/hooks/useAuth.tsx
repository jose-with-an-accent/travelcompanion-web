import { useContext, useEffect, useState } from "react";
import PocketbaseContext from "../PocketbaseContext";
type AuthHookProps = {

}
export default function useAuth() {
    const pbContext = useContext(PocketbaseContext);
    const [isAuthed, setIsAuthed] = useState(false);

    function updateAuthStatus() {
        setIsAuthed(pbContext.authStore.isValid);
    }
    useEffect(() => {
        return pbContext.authStore.onChange(updateAuthStatus, true);
    })

    return isAuthed;
}