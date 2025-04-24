import { api } from "./api";

interface GetOriginalUrlResponse {
    originalUrl: string
}

export async function getOriginalUrl(shortenedUrlCode: string) {
    const { data } = await api.get<GetOriginalUrlResponse>(`/${shortenedUrlCode}`)
    return data
}