import { api } from "./api";

interface GetOriginalUrlResponse {
    originalUrl: string
}

export async function getOriginalUrl(shortenedUrlCode: string) {
    const { data } = await api.get<GetOriginalUrlResponse>(`/urls/${shortenedUrlCode}`)
    return data
}