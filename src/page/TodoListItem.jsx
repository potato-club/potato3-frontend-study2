import React, { useState } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

export default function TodoListItem() {
  return (
    <TodoListItemBG>
      <CheckBox>
        <Text>할 일</Text>
      </CheckBox>
      <Remove>
        <TiDelete />
      </Remove>
    </TodoListItemBG>
  );
}

const TodoListItemBG = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: white;
`;
const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
`;
const Text = styled.div``;
const Remove = styled.div`
  cursor: pointer;
`;
