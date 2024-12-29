import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {z} from "zod";
import InputForm from "./components/CustomInput";

const schema = z.object({
    name: z.string().min(1,"El nombre es obligatorio"),
    email: z.string().email("Correo inválido").min(1,"El correo es obligatorio"),
    password: z.string().min(6,"La contraseña debe de tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6,"La confirmación debe tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword,{
    message: "Las contraseñas son inválidas",
    path: ['confirmPassword']
})

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
    const{control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <InputForm name="name" control={control} label="Name" type="string" error={errors.name}/>
                <InputForm name="email" control={control} label="Email" type="email" error={errors.email}/>
                <InputForm name="password" control={control} label="Password" type="string" error={errors.password}/>
                <InputForm name="confirmPassword" control={control} label="Confirm Password" type="string" error={errors.confirmPassword}/>
            </div>
        </form>
    )
}
export default CustomForm;