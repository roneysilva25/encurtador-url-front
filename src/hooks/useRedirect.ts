import { redirect } from "../utils/redirect"
import { getOriginalUrl } from "../services/getOriginalUrl"
import { useEffect } from "react"
import { trimProtocolFromUrl } from "../utils/trim-protocol-from-string"

interface IUseRedirect {
    shortenedUrlCode: string
}

export function useRedirect({ shortenedUrlCode }: IUseRedirect) {
    useEffect(() => {
        if (shortenedUrlCode !== '') {
            getOriginalUrl(shortenedUrlCode).then((value) => redirect(trimProtocolFromUrl(value.originalUrl)))        
        }
    }, [shortenedUrlCode])
}