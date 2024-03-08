"use client";
import React, { useState } from "react";

interface Props {
  createTodo: (value: string) => void;
}

const AddTodo = () => {
  const [input, setInput] = useState("");
  return <div></div>;
};

export default AddTodo;
