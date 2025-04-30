import { Alert, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useRedirect } from "../hooks/useRedirect";
import { BiError } from "react-icons/bi";
import { GeneralInfoList } from "../components/ui/general-info-list";

export function RedirectToOriginal() {
    const { shortenedUrlCode } = useParams()

    const {
        isError,
        isLoading,
        errorMessage
    } = useRedirect({ shortenedUrlCode: shortenedUrlCode || '' })

    return (
        <Stack w={"100%"} h={"87vh"} align={"center"} justify={"center"}>
            { isLoading &&
                <Alert.Root
                    status={"info"}
                    w={"xl"}
                    borderStartWidth="3px"
                    borderStartColor="colorPalette.600"
                    title="Redirecionando"
                    variant={"surface"}
                >
                    <Alert.Indicator>
                        <Spinner size="sm" />
                    </Alert.Indicator>
                    <Alert.Title>Aguarde, estamos te redirecionando para o link original.</Alert.Title>
                </Alert.Root>
            }
            { isError &&
                <Alert.Root
                    status={"error"}
                    w={"xl"}
                    borderStartWidth="3px"
                    borderStartColor="colorPalette.600"
                    title="Não foi possível redirecionar"
                    variant={"surface"}
                >
                    <Alert.Indicator>
                        <BiError size="sm" />
                    </Alert.Indicator>
                    <Alert.Title>{errorMessage}</Alert.Title>
                </Alert.Root>
            }

            <GeneralInfoList />
        </Stack>  
    )
}