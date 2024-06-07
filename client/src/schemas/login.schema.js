import * as v from "valibot";

export const LoginSchema = v.object({
  email: v.pipe(v.string(), v.nonEmpty("Introduce un email.")),
  password: v.pipe(
    v.string(),
    v.nonEmpty("introduce una contraseña."),
    v.minLength(4, "Tu contraseña debe tener más de 4 caracteres."),
  ),
});
