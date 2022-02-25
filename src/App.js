import logo from "./logo.svg";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import TodoTamplate from "./page/TodoTamplate";
import TodoInsert from "./page/\bTodoInsert";
import TodoList from "./page/TodoList";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTamplate>
        <TodoInsert />
        <TodoList />
      </TodoTamplate>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
