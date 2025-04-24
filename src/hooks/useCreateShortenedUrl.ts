import { createShortenedUrlCode } from "../services/createShortenedUrlCode";
import { useEffect, useState } from "react";
import { useShortenedUrlCode } from "./useShortenedUrlCode";
import { useIsError } from "./useIsError";
import { useIsLoading } from "./useIsLoading";

export function useCreateShortenedUrl() {
    const [urlToShorten, setUrlToShorten] = useState("")
    
    const { 
        shortenedUrlCode,
        shortenedUrlWithBaseUrl,
        setShortenedUrlCode 
    } = useShortenedUrlCode({ baseUrl: "localhost:5173" })
    
    const { isError, setIsError } = useIsError()

    const { isLoading, setIsLoading } = useIsLoading()

    useEffect(() => {
        if (urlToShorten !== "") {
            setIsLoading(true)
            createShortenedUrlCode(urlToShorten)
            .then((value) => {
                setShortenedUrlCode(value.shortenedUrlCode)
                setIsError(false)
            })
            .catch(() => setIsError(true))
            .finally(() => {
                setIsLoading(false)
            })
        }
    }, [urlToShorten])

    return { shortenedUrlWithBaseUrl, shortenedUrlCode,  setUrlToShorten, isError, isLoading }
}