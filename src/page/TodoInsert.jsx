import React, { useState } from "react";
import styled from "styled-components";
import { MdFingerprint } from "react-icons/md";

export default function TodoInsert() {
  return (
    <>
      <Container>
        <PlaceHolder placeholder="할일을 적으시오."></PlaceHolder>
        <PushI type="submit">
          <MdFingerprint />
        </PushI>
      </Container>
    </>
  );
}

const Container = styled.form`
  background: white;
  display: flex;
`;

const PlaceHolder = styled.input`
  background: none;
  outline: none;
  border: 1px solid black;
  padding: 0.5rem;
  font-size: 1.125 rem;
  line-height: 1.5;
  flex: 1;
`;

const PushI = styled.button`
  background: none;
  outline: none;
  border: 1px solid black;
  background : none;
  padding-left: 1rem;
  padding-right : 1rem;
  font-size: 1.5 rem;
  display:flex;
  align-items: center;
  cursor : pointer;
  transition 0.1 background ease-in;
`;
