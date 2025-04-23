import { useState } from "react"

export function useShortenedUrl() {
    const [shortenedUrl, setShortenedUrl] = useState<string>("")
    return { shortenedUrl, setShortenedUrl }
}