"use client";
import React, { useState } from "react";
import { todoType } from "@/app/utils/types";

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => void;
  toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: React.FC<Props> = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [header, setHeader] = useState(todo.header);
  const [description, setDescription] = useState(todo.description);
  const [isDone, setIsDone] = useState(todo.done);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setText(e.target.value);
  };

  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    // changeTodoText(todo.id, text);
    // setEditing(false);
  };

  const handleCancel = () => {
    // setEditing(false);
    // setText(todo.text);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      <input
        type="checkbox"
        className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onChange={handleIsDone}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={header}
          onChange={handleTextChange}
          readOnly={!editing}
          className={`${
            todo.done ? "line-through" : ""
          } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
        />
        <input
          type="text"
          value={description}
          onChange={handleTextChange}
          readOnly={!editing}
          className={`${
            todo.done ? "line-through" : ""
          } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
        />
      </div>
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
export default Todo;
