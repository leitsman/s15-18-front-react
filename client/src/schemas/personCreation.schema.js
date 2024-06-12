import * as v from "valibot";

export const PersonCreationSchema = v.object({
  firstName: v.pipe(v.string(), v.nonEmpty("Introduce un nombre de usuario.")),
  lastName: v.pipe(
    v.string(),
    v.nonEmpty("introduce una apellido.")
  ),
  dni: v
    .pipe(
      v.string(),
      v.nonEmpty("Introduce un DNI."),
    ),

  addressName: v.pipe(
    v.string(),
    v.nonEmpty("Introduce una nombre de dirección."),
  ),
  postalCode: v.pipe(
    v.string(),
    v.nonEmpty("Introduce un Código Postal."),
  ),
  city: v.pipe(
    v.string(),
    v.nonEmpty("Introduce una ciudad."),
  ),
  country: v.pipe(
    v.string(),
    v.nonEmpty("Introduce un país."),
  ),
  phone: v.pipe(
    v.string(),
    v.nonEmpty("Introduce un teléfono."),
  ),

});
