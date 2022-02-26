import React, { useState } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { BsCircle } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
//import { BsCheckLg } from "react-icons/bs";
//import { TiDeleteOutline } from "react-icons/ti";

export default function TodoListItem({ todo }) {
  const { text, checked } = todo;

  return (
    <TodoListItemBG>
      <CheckBox>
        {checked ? <BsCheck2Circle /> : <BsCircle />}
        <Text>{text}</Text>
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
const Text = styled.div`
  display: flex;
  flex: 1;
  margin-left: 10px;
`;
const Remove = styled.div`
  cursor: pointer;
`;
