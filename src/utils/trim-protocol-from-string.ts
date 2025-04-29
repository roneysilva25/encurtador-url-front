export function trimProtocolFromUrl(url: string) {
    return url.replace("https://", "").replace("http://", "")
}