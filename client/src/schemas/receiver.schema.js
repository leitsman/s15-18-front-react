import * as v from "valibot";

export const ReceiverSchema = v.object({
  dni: v.pipe(v.string(), v.nonEmpty("Introduce un dni.")),
});
