import { Elysia } from "elysia";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { userRoutes } from "./routes";

export const db = drizzle(createClient({ url: "file:./local.db" }));

export const app = new Elysia().onError(({ error, code, set }) => {
  switch (code) {
    case "NOT_FOUND": {
      set.status = 404;
      return {
        message: error.message,
        statusCode: set.status,
      };
    }
    case "VALIDATION": {
      set.status = 422;

      const validationErrors = new Map<string, string[]>();

      error.all.forEach((val) => {
        if (val.type === 45) {
          const fieldName = val.path.slice(1);

          if (validationErrors.has(fieldName)) {
            let currentValues = validationErrors.get(fieldName);

            if (currentValues) {
              validationErrors.set(fieldName, [
                ...currentValues,
                error.message,
              ]);
            }
          } else {
            validationErrors.set(fieldName, [val.message]);
          }
        }
      });

      return {
        message: error.model,
        statusCode: set.status,
      };
    }
  }
});

app.use(userRoutes);

app.listen(process.env.PORT ?? 8000, ({ port }) => {
  console.log(`Server listening on port: ${port}`);
});
