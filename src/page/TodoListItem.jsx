import React, { useState } from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { BsCircle } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
//import { BsCheckLg } from "react-icons/bs";
//import { TiDeleteOutline } from "react-icons/ti";

export default function TodoListItem({ todo, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <ItemWrapper>
      <CheckBox>{checked ? <BsCheck2Circle /> : <BsCircle />}</CheckBox>
      <Text
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {text}
      </Text>
      <TiDelete
        cursor="pointer"
        onClick={() => {
          onRemove(id);
        }}
      />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
`;
const CheckBox = styled.div`
  cursor: pointer;
`;
const Text = styled.div``;
