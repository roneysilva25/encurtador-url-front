import { trimProtocolFromUrl } from "../../utils/trim-protocol-from-string";
import { Inputs, UseUrlValidation } from "../../hooks/useUrlValidation";
import { Button, Field, Group, Input, InputGroup } from "@chakra-ui/react"
import { SubmitHandler } from "react-hook-form";
import { LuLink } from "react-icons/lu";
import { useIsLoading } from "../../hooks/useIsLoading"
import { TiArrowRight } from "react-icons/ti";

interface Props {
    onValid?: (shortenedUrl: string) => void;
    onError?: () => void
}

export function InputUrl({
    onValid = () => {},
    onError = () => {}
}: Props) {
    const { register, handleSubmit, watch, errors } = UseUrlValidation()
    const { isLoading, setIsLoading } = useIsLoading()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setIsLoading(true)
        onValid(trimProtocolFromUrl(data.urlInput))
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root invalid={Boolean(errors.urlInput)}>
                <InputGroup startElement={<LuLink />}>
                    <Group w={"full"} attached>
                        <Input 
                            pl={10} 
                            disabled={isLoading}
                            placeholder="suaurl.com" 
                            type="url"
                            {...register("urlInput", { 
                                required: "Digite alguma URL", 
                                minLength: { value: 10, message: "A URL deve ter, no mínimo 10 caracteres de tamanho." } 
                            })}
                        />
                        <Button 
                            colorPalette={"blue"}
                            type="submit" 
                            variant="surface"
                            loading={isLoading}
                        >
                            Encurtar <TiArrowRight />
                        </Button>
                    </Group>
                </InputGroup>
                <Field.ErrorText>{errors.urlInput?.message}</Field.ErrorText>
            </Field.Root>
        </form>
    )
}