import { Heading, Stack } from "@chakra-ui/react"
import { InputUrl } from "./components/ui/input-url"
import { Provider } from "./components/ui/provider"
import { UrlResult } from "./components/ui/url-result"
import { useShortenedUrl } from "./hooks/useShortenedUrl"
import { useIsError } from "./hooks/useIsError"
import { Header } from "./components/ui/header"
import { Footer } from "./components/ui/footer"

function App() {
  const { shortenedUrl, setShortenedUrl } = useShortenedUrl()
  const { isError, setIsError } = useIsError()

  return (
    <Provider>
      <Header />
      <Stack w={"100vw"} h={"87vh"} align={"center"} justify={"center"}>
        <Stack gap={6} p={6} borderRadius={6} w={{ lg: "xl", md: "md", smDown: "sm" }} alignContent={"center"} justifyContent={"center"} bg={"bg.subtle"}>
          <Heading>Insira a sua URL abaixo</Heading>
          <InputUrl 
            onValid={(shortenedUrlResult) => {
              setIsError(false)
              setShortenedUrl(shortenedUrlResult)
            }}
            onError={() => {
              setIsError(true)
              setShortenedUrl("")
            }}
          />
          {
            shortenedUrl && <UrlResult status="success" shortenedUrl={shortenedUrl}/>
          }
          {
            isError && <UrlResult status="error" shortenedUrl={""} />
          }
        </Stack>
      </Stack>
      <Footer />
    </Provider>
  )
}

export default App
