import { db } from "@/drizzle/db";
import { InsertTodo, todosSchema } from "@/drizzle/schema/schema";

// export async function insertTodo(data: InsertTodo): Promise<void> {
//   await db.insert(todosSchema).values(data);
// }

export async function insertTodo(data: InsertTodo) {
  const result = db;
  // const res = await db.insert(todosSchema).values(data);
  // return res;
}
