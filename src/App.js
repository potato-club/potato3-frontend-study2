import React, { useState, useRef } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTamplate from "./page/TodoTamplate";
import InputBox from "./page/InputBox";
import TodoList from "./page/TodoList";
// import TodoListItem from "./page/TodoListItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const onInsertTodo = (text) => {
    const pushTodo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(pushTodo));
    nextId.current++;
  };

  return (
    <>
      <GlobalStyle />
      <TodoTamplate>
        <InputBox onInsertTodo={onInsertTodo} />
        <TodoList todos={todos} />
      </TodoTamplate>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
