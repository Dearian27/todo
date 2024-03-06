import { integer, pgTable, boolean, text } from "drizzle-orm/pg-core";

export const todoSchema = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
