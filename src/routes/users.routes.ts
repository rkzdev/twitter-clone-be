import { Elysia, t, NotFoundError } from "elysia";
import { db } from "../server";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const userRoutes = new Elysia({ prefix: "/users" });

userRoutes.get("/", async () => {
  const result = await db.select().from(users).all();

  return result;
});

userRoutes.post(
  "/",
  (c) => {
    const body = c.body;

    return body;
  },
  {
    body: t.Object({
      name: t.String(),
      email: t.String(),
    }),
  },
);

userRoutes.get("/:id", async (c) => {
  const id = c.params.id;

  const result = await db
    .select()
    .from(users)
    .where(eq(users.id, +id))
    .limit(1);

  if (result.length < 1) {
    throw new NotFoundError("entity not found.");
  }

  return result[0];
});

userRoutes.patch(
  "/:id",
  async (c) => {
    const id = c.params.id;

    let result = await db
      .select()
      .from(users)
      .where(eq(users.id, +id))
      .limit(1);

    if (result.length < 1) {
      throw new NotFoundError("entity not found.");
    }

    result = await db
      .update(users)
      .set({ username: c.body.username })
      .where(eq(users.id, +id))
      .returning();

    return result;
  },
  {
    body: t.Object({
      username: t.String(),
    }),
  },
);
