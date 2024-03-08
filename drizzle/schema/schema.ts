import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const todosSchema = sqliteTable("todos", {
  header: text("header").notNull(),
  description: text("description").default(""),
});
