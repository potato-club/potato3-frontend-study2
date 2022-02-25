import React, { useState } from "react";
import styled from "styled-components";

export default function TodoTemplate({ children }) {
  return (
    <>
      <TodoBG>
        <Title>To do list</Title>
        <Contents>{children}</Contents>
      </TodoBG>
    </>
  );
}

const TodoBG = styled.div`
  width: 500px;

  margin-right: auto;
  margin-left: auto;
  margin-top: 6rem;
  border-radius: 16px;
`;

const Title = styled.div`
  display: flex;

  background: #9c88ff;
  color: white;
  font-size: 1.5rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  background: #7f8fa6;
`;
