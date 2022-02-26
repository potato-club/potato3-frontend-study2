import React from "react";
import styled from "@emotion/styled";
import "./TodoList.css";
import { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addList = () => {
    let helper = [...list];
    helper.push(text);
    setList(helper);
    setText("");
  };

  const allDeleteList = () => {
    setList([]);
  };

  const deleteList = (key) => {
    setList(list.filter((element, index) => index !== key));
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          ToDo List
          <Reset onClick={allDeleteList} className="reset">
            리셋
          </Reset>
        </Header>
        <List list={list} deleteList={deleteList} />
        <Content className="content">
          <Input
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && addList();
            }}
            value={text}
          />
        </Content>
        <Footer onClick={addList}>확인</Footer>
      </Wrapper>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 30px 40px;
  background-color: skyblue;
  border-radius: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  height: 45px;
  line-height: 45px;
  color: white;
  font-family: monospace;
  font-size: 35px;
  background-color: steelblue;
  border-radius: 15px 15px 0 0;
`;

const Content = styled.div`
  height: 40px;
`;

const Footer = styled.button`
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: steelblue;
  border-radius: 0 0 15px 15px;
  font-family: monospace;
  color: white;
  font-size: 15px;
`;

const Reset = styled.button`
  position: absolute;
  right: 20px;
  top: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;
