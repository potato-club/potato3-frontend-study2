import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onRemove }) {
  return (
    <>
      <div>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}
