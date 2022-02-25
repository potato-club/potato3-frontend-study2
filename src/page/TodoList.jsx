import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { TodoInput } from '../components/TodoInput';
import { TodoItem } from '../components/TodoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
`;

const ItemsWraper = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #f3fdfc;
  overflow: scroll;
`;

export const TodoList = () => {
  const [todoData, setTodoData] = useState([]);
  const nextId = useRef(0);

  return (
    <Container>
      <Header />
      <ItemsWraper>
        {todoData.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onDelete={() => {
              setTodoData(todoData.filter((value) => value.id !== todo.id));
            }}
          />
        ))}
      </ItemsWraper>
      <TodoInput
        onSubmit={(value) => {
          setTodoData(todoData.concat({ id: nextId.current++, text: value }));
        }}
      />
    </Container>
  );
};
