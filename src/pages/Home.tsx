import { Heading, Stack } from "@chakra-ui/react"
import { InputUrl } from "../components/ui/input-url"
import { UrlResult } from "../components/ui/url-result"
import { useCreateShortenedUrl } from "../hooks/useCreateShortenedUrl"
import { GeneralInfoList } from "../components/ui/general-info-list"

export function Home() {
    const {
        shortenedUrlCode,
        shortenedUrlWithBaseUrl,
        setUrlToShorten,
        isError,
        isLoading
    } = useCreateShortenedUrl()

    return (
        <Stack h={"87vh"} align={"center"} justify={"center"}>
            <Stack gap={10} w={{ lg: "xl", md: "md", smDown: "sm" }}>
                <Stack gap={6} p={6} borderRadius={6} alignContent={"center"} justifyContent={"center"} bg={"bg.subtle"}>
                    <Heading>Insira a sua URL abaixo</Heading>
                    <InputUrl 
                        isLoading={isLoading}
                        onSubmitValid={(validUrl) => {
                            setUrlToShorten(validUrl)
                        }}
                    />
                    {
                        ( shortenedUrlCode && !isLoading ) && <UrlResult status="success" shortenedUrl={shortenedUrlWithBaseUrl}/>
                    }
                    {
                        isError && <UrlResult status="error" shortenedUrl={""} />
                    }
                </Stack>

                <GeneralInfoList />
            </Stack>
        </Stack>
    )
}