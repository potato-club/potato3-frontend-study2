import React, { useState } from "react";
import styled from "styled-components";
import { BsCalendar2Check } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export default function InputBox({ onInsertTodo, allRemove }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    //e.preventDefualt();
    if (value === "") {
      return alert("할일을 입력하세요");
    } else {
      onInsertTodo(value);
      setValue("");
    }
  };

  // const onKeySubmit = (e) => {
  //   if (e.key === "Enter") {
  //     onSubmit();
  //   }
  // };

  return (
    <>
      <Container>
        <PlaceHolder
          type="text"
          placeholder="할일을 적으시오."
          value={value}
          onChange={onChange}
          autoFocus
        />
        <ResetButton onClick={allRemove}>
          <GrPowerReset />
        </ResetButton>
        <PushButton type="button" onClick={onSubmit}>
          <BsCalendar2Check />
        </PushButton>
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

const ResetButton = styled.div`
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

const PushButton = styled.button`
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
