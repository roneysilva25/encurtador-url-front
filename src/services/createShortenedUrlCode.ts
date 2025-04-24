import { api } from "./api";

interface CreateShortenedUrlCodeResponse {
    shortenedUrlCode: string
}

export async function createShortenedUrlCode(urlToShorten: string) {
    const { data } = await api.post<CreateShortenedUrlCodeResponse>("", {
        urlToShorten
    });
    return data
} 