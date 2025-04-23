export function trimProtocolFromUrl(url: String) {
    return url.replace("https://", "").replace("http://", "")
}