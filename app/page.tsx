import Image from "next/image";
import styles from "./page.module.css";
import Todos from "./components/Todos";
import { db } from "@/drizzle/db";
import { todosSchema } from "@/drizzle/schema/schema";
import Button from "./components/Button";

export default async function Home() {
  // const result = await db.select().from(todosSchema).all();
  // .from(todosSchema).all();

  const newItem = {
    bar: "Новий елемент",
  };
  const addElement = async () => {};

  // console.log(result);

  return (
    <main className={styles.main}>
      hello
      <Button click={addElement}>Add</Button>
      {/* <Todos /> */}
    </main>
  );
}
