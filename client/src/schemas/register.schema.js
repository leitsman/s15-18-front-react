import * as v from "valibot";

export const RegisterSchema = v.object({
  email: v.pipe(v.string(), v.nonEmpty("Introduce un email.")),
  password: v.pipe(
    v.string(),
    v.nonEmpty("introduce una contraseña."),
    v.minLength(8, "Tu contraseña debe tener más de 8 caracteres."),
  ),
  confirmPassword: v.pipe(v.string()),
});
