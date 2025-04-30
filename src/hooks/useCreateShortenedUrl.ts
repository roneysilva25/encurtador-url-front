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
    } = useShortenedUrlCode({ baseUrl: window.location.host })
    
    const { isError, setIsError } = useIsError()

    const { isLoading, setIsLoading } = useIsLoading()

    useEffect(() => {
        if (urlToShorten !== "") {
            setIsLoading(true)
            setIsError(false)
            createShortenedUrlCode(urlToShorten)
            .then((value) => {
                setShortenedUrlCode(value.shortenedUrlCode)
                setIsError(false)
            })
            .catch(() => {
                setIsError(true)
                setShortenedUrlCode("")
            })
            .finally(() => {
                setIsLoading(false)
            })
        }
    }, [setIsError, setIsLoading, setShortenedUrlCode, urlToShorten])

    return { shortenedUrlWithBaseUrl, shortenedUrlCode,  setUrlToShorten, isError, isLoading }
}