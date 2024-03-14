import { sql, SQL } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const todosSchema = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  header: text("header").notNull(),
  description: text("description").default(""),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
});

export type InsertTodo = typeof todosSchema.$inferInsert;
export type SelectTodo = typeof todosSchema.$inferSelect;
