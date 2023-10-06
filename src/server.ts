import { drizzle, BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import Database from "bun:sqlite";
import express from "express";
import * as schema from "./db/schema";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const sqlite = new Database("sqlite.db", { create: true });
export const db: BunSQLiteDatabase<typeof schema> = drizzle(sqlite, {
  schema: schema,
});
migrate(db, { migrationsFolder: "drizzle" });

export const app = express();
export const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
