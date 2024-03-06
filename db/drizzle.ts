import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

const drivers = pgTable("drivers", {
  id: text("id").primaryKey(),
  surname: text("surname"),
  forename: text("forename"),
  nationality: text("nationality"),
});

const db = drizzle(xata);

export default db;
