import { useState } from "react";

export function useIsError() {
    const [isError, setIsError] = useState(false)
    return { isError, setIsError }
}