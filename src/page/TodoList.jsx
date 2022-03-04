import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { TodoInput } from '../components/TodoInput';
import { TodoItem } from '../components/TodoItem';
import { todoListState } from './../recoil/todoList';

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <Container>
      <Header />
      <ItemsWraper>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} data={todo} />
        ))}
      </ItemsWraper>
      <TodoInput />
    </Container>
  );
};

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
  overflow-y: scroll;
`;
