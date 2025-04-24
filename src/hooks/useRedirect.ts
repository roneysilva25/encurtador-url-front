import { redirect } from "../utils/redirect"
import { getOriginalUrl } from "../services/getOriginalUrl"
import { useEffect } from "react"

interface IUseRedirect {
    shortenedUrlCode: string
}

export function useRedirect({ shortenedUrlCode }: IUseRedirect) {
    useEffect(() => {
        if (shortenedUrlCode !== '') {
            getOriginalUrl(shortenedUrlCode).then((value) => redirect(value.originalUrl))        
        }
    }, [shortenedUrlCode])
}