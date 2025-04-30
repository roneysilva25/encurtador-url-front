import { useState } from "react";

export function useErrorMessage() {
    const [errorMessage, setErrorMessage] = useState("")
    return { errorMessage, setErrorMessage }
}