import { Heading, List, Stack } from "@chakra-ui/react"
import { InputUrl } from "../components/ui/input-url"
import { UrlResult } from "../components/ui/url-result"
import { useCreateShortenedUrl } from "../hooks/useCreateShortenedUrl"
import { BiInfoCircle } from "react-icons/bi"

export function Home() {
    const {
        shortenedUrlCode,
        shortenedUrlWithBaseUrl,
        setUrlToShorten,
        isError,
        isLoading
    } = useCreateShortenedUrl()

    return (
        <Stack w={"100vw"} h={"87vh"} align={"center"} justify={"center"}>
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
                        shortenedUrlCode && <UrlResult status="success" shortenedUrl={shortenedUrlWithBaseUrl}/>
                    }
                    {
                        isError && <UrlResult status="error" shortenedUrl={""} />
                    }
                </Stack>

                <List.Root gap="2" variant="plain" align="center">
                    <List.Item color={"gray.500"}>
                        <List.Indicator asChild color="gray.500">
                            <BiInfoCircle />
                        </List.Indicator>
                        URLs encurtadas que não receberam nenhum clique nos últimos 30 dias são excluídas permanentemente.
                    </List.Item>
                </List.Root>
            </Stack>
        </Stack>
    )
}