import { redirect } from "../utils/redirect"
import { getOriginalUrl } from "../services/getOriginalUrl"
import { useEffect } from "react"
import { trimProtocolFromUrl } from "../utils/trim-protocol-from-string"
import { useIsError } from "./useIsError"
import { useIsLoading } from "./useIsLoading"
import { useErrorMessage } from "./useErrorMessage"
import { sleep } from "../utils/sleep"

interface IUseRedirect {
    shortenedUrlCode: string
}

export function useRedirect({ shortenedUrlCode }: IUseRedirect) {
    const { isError, setIsError } = useIsError()
    const { isLoading, setIsLoading } = useIsLoading()
    const { errorMessage, setErrorMessage } = useErrorMessage()

    useEffect(() => {
        if (shortenedUrlCode !== '') {
            setIsLoading(true)
            getOriginalUrl(shortenedUrlCode)
            .then(async (value) => {
                await sleep(3000)
                redirect(trimProtocolFromUrl(value.originalUrl))
                setIsError(false)
            })
            .catch((value) => {
                setIsError(true)
                setErrorMessage(value.response?.data?.message || value?.message)
            })
            .finally(() => setIsLoading(false))
        }
    }, [shortenedUrlCode, setIsError, setIsLoading, setErrorMessage])

    return { isError, isLoading, errorMessage }
}