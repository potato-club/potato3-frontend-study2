import React, { useState } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import TodoTamplate from "./page/TodoTamplate";
import InputBox from "./page/InputBox";
import TodoList from "./page/TodoList";

let nextId = 4;

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "첫번째",
      checked: false,
    },
    {
      id: 2,
      text: "두번째",
      checked: false,
    },
    {
      id: 3,
      text: "세번째",
      checked: false,
    },
  ]);

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할일을 입력하세요");
    } else {
      const pushTodo = {
        id: nextId,
        text,
        checked: false,
      };

      setTodos((todos) => todos.concat(pushTodo));
      nextId++;
    }
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
