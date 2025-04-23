import { useState } from "react";

export function useIsLoading() {
    const [isLoading, setIsLoading] = useState(false)
    return { isLoading, setIsLoading }
}