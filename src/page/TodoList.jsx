import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos }) {
  return (
    <>
      <div>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}
