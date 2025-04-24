import { useState } from "react"

interface IUseShortenedUrlCode {
    baseUrl: string
}

export function useShortenedUrlCode({ baseUrl }: IUseShortenedUrlCode) {
    const hasSlashAtTheEnd = baseUrl.endsWith("/")
    if (hasSlashAtTheEnd) {
        const lastCharacterIndex = baseUrl.length - 1
        baseUrl = baseUrl.slice(0, lastCharacterIndex)
    }

    const [shortenedUrlCode, setShortenedUrlCode] = useState<string>("")
    return { shortenedUrlCode, shortenedUrlWithBaseUrl: `${baseUrl}/${shortenedUrlCode}`, setShortenedUrlCode }
}