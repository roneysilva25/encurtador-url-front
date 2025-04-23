import { useForm } from "react-hook-form"

export type Inputs = {
    urlInput: string
}

export function UseUrlValidation() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    return { register, handleSubmit, watch, errors }
}