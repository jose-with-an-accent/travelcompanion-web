import { useRef } from "react";

type Alert = {

}

export default function useAlert(): Alert {
    const alert = useRef<HTMLDivElement>();
    const currentText = alert.current?.innerText;
    const setAlert = (text: string): void => {
        console.log(text);
        if (alert !== undefined && alert.current) {
            alert.current.innerText = text;
        }
    }
    return [currentText, setAlert];
}