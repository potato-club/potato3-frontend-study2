import React, { useState, useRef } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTamplate from "./page/TodoTamplate";
import InputBox from "./page/InputBox";
import TodoList from "./page/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);
  console.log(todos);

  const onInsertTodo = (text) => {
    const pushTodo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(pushTodo));
    nextId.current++;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const allRemove = () => {
    setTodos([]);
  };

  const onCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <GlobalStyle />
      <TodoTamplate>
        <InputBox onInsertTodo={onInsertTodo} allRemove={allRemove} />
        <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck} />
      </TodoTamplate>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
