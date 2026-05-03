import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, Control, Form, FieldPath } from "react-hook-form";
import * as z from "zod";
import {authFormSchema} from "@/lib/utils"



  const formSchema = authFormSchema('sign-up');


interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="form-item">
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="form-label" htmlFor={name}>{label}</FieldLabel>
            <div className="flex w-full flex-col">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder={placeholder}
                autoComplete="off" id={name}
                className="input-class" type={name === 'password' ? 'password' : 'text'}
              />
              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className="form-message mt-2"
                />
              )}
            </div>
          </Field>
        </div>
      )}
    />
  );
};

export default CustomInput;
