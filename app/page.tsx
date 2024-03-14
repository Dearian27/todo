// "use client";
import Image from "next/image";
import styles from "./page.module.css";
import Todos from "./components/Todos";
import { db } from "@/drizzle/db";
import { todosSchema } from "@/drizzle/schema/schema";
import Form from "./components/Form";
import { insertTodo } from "@/actions/todoActions";
import { todoType } from "./utils/types";
import { createTodo, getTodos } from "./action";
// import { tursoReq } from "./action";

export default async function Home() {
  const { rows } = await getTodos();
  const todos = JSON.parse(JSON.stringify(rows));

  return (
    <main className={styles.main}>
      hello wirld
      {/* {result.toString()} */}
      {/* <Form click={addElement}>Add</Form> */}
      {todos ? (
        <Todos todos={todos} />
      ) : (
        <h2 style={{ color: "red" }}>Error getting todos</h2>
      )}
    </main>
  );
}
