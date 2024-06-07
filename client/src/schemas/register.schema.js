import * as v from "valibot";

export const RegisterSchema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, "El nombre debe tener mínimo 2 caracteres"),
  ),
  dni: v.pipe(
    v.string(),
    v.minLength(2, "El dni debe tener mínimo 3 caracteres"),
  ),
  email: v.pipe(v.string(), v.nonEmpty("Introduce un email.")),
  password: v.pipe(
    v.string(),
    v.nonEmpty("introduce una contraseña."),
    v.minLength(4, "Tu contraseña debe tener más de 4 caracteres."),
  ),
  confirmPassword: v.pipe(v.string()),
});
