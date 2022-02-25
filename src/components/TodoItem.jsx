import React from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

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

export const TodoItem = (props) => {
  return (
    <Container>
      <Expanded>{props.text}</Expanded>
      <DeleteButton onClick={props.onDelete}>
        <MdDelete size="1.25rem" />
      </DeleteButton>
    </Container>
  );
};
