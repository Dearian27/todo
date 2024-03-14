import { db } from "@/drizzle/db";
import { todosSchema } from "@/drizzle/schema/schema";

// const client = createClient({
//   url: process.env.TURSO_DATABASE_URL!,
//   authToken: process.env.TURSO_AUTH_TOKEN!,
// });

// export async function tursoReq(header: string) {
//   try {
//     const res = await client.execute({
//       sql: `SELECT * FROM todos where header = :header`,
//       args: [header],
//     });
//     return res.rows;
//   } catch (err) {
//     console.error(err);
//     return;
//   }
// }

export async function createTodo(header: string, description: string) {
  try {
    const res = await db
      .insert(todosSchema)
      .values({ header, description })
      .run();
    return res;
  } catch (err) {
    console.log(err);
    return;
  }
}

export async function getTodos() {
  try {
    return await db.select().from(todosSchema).run();
  } catch (err) {
    console.log(err);
    return;
  }
}
