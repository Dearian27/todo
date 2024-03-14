"use client";
import React, { useState } from "react";
import { todoType } from "@/app/utils/types";

type ButtonProps = {
  // click: (click: React.MouseEvent<HTMLButtonElement>) => void;
  click: (object: todoType) => Promise<void>;
  children: React.ReactNode;
};
const Form: React.FC<ButtonProps> = ({ click }) => {
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          placeholder="header"
          value={header}
          onChange={(event) => setHeader(event?.target.value)}
          style={{ border: "1px lightgrey solid" }}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event?.target.value)}
          style={{ border: "1px lightgrey solid" }}
        />
        <button
          onClick={() => click({ header, description, done: false })}
          style={{ border: "1px lightgrey solid" }}
        >
          Button
        </button>
      </div>
    </>
  );
};

export default Form;
