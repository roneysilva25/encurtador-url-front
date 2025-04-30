import { Alert, Link, Stack, Clipboard } from "@chakra-ui/react";

interface Props {
    status: "success" | "error";
    shortenedUrl: string
}

export function UrlResult({
    status,
    shortenedUrl
}: Props) {
    if (status === "success") {
        return (
            <Stack gap={2}>
                <Alert.Root status={"success"} variant={"surface"}>
                    <Alert.Indicator />
                    <Alert.Title>A sua URL foi encurtada com sucesso. Confira o resultado abaixo</Alert.Title>
                </Alert.Root>
                <Clipboard.Root textAlign={"center"} value={shortenedUrl}>
                    <Clipboard.Trigger asChild>
                        <Link as="span" color="blue.fg" textStyle="md">
                        <Clipboard.Indicator />
                        <Clipboard.ValueText />
                        </Link>
                    </Clipboard.Trigger>
                </Clipboard.Root>
            </Stack>
        )
    }

    if (status === "error") {
        return (
            <Alert.Root status={"error"} variant={"surface"}>
                <Alert.Indicator />
                <Alert.Title>Houve um erro ao encurtar a sua URL. Tente novamente mais tarde</Alert.Title>
            </Alert.Root>
        )
    }
}