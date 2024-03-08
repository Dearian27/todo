"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Todos from "./components/Todos";
import { db } from "@/drizzle/db";
import { todosSchema } from "@/drizzle/schema/schema";
import Button from "./components/Button";

export default function Home() {
  // .from(todosSchema).all();

  const newItem = {
    header: "Новий елемент",
    description: "Новий елемент",
  };
  const addElement = async () => {
    // const result = await db.select().from(todosSchema).all();
    // const result = await db.execute("SELECT * FROM users");
    const result = await db.select().from(todosSchema).all();
    console.log(result);
  };

  // console.log(result);

  return (
    <main className={styles.main}>
      hello
      <Button click={addElement}>Add</Button>
      {/* <Todos /> */}
    </main>
  );
}
