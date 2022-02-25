import React from "react";
import styled from "@emotion/styled";
import "./TodoList.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [text, settext] = useState("ds");

  return (
    <Every>
      <Wrapper>
        <Header>ToDo List</Header>
        <List>
          <ul>
            <li>{text} <FontAwesomeIcon icon={faTrash} className="trash" /></li>
          </ul>
        </List>
        <Content>
          <input type={text}></input>
        </Content>
        <Footer>
          확인
        </Footer>
      </Wrapper>
    </Every>
  );
};

export default TodoList;

const Every = styled.div`
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
  text-align: center;
  height: 45px;
  line-height: 45px;
  color: white;
  font-family: monospace;
  font-size: 35px;
  background-color: steelblue;
  border-radius: 15px 15px 0 0;
`;

const List = styled.div`
  height: 445px;
  font-family: monospace;
  background-color: rgb(217, 245, 244);
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
