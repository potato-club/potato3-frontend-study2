import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListState } from './../recoil/todoList';

export const TodoItem = (props) => {
  const setTodoList = useSetRecoilState(todoListState);

  return (
    <Container>
      <Expanded>{props.data.text}</Expanded>
      <DeleteButton
        onClick={() =>
          setTodoList((todoList) =>
            todoList.filter((todo) => todo.id !== props.data.id)
          )
        }
      >
        <MdDelete size="1.25rem" />
      </DeleteButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Expanded = styled.div`
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;
