import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  return (
    <>
      <div>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    </>
  );
}
