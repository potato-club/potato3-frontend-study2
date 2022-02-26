import React from "react";
import styled from "@emotion/styled";
import "./TodoList.css";
import { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");

  const addList = () => {
    let helper = [...list];
    helper.push(text);
    setlist(helper);
    settext("");
  };

  const allDeleteList = () => {
    setlist([]);
  };

  
  return (
    <Every>
      <Wrapper>
        <Header>
          ToDo List
          <button onClick={allDeleteList} className="reset">
            리셋
          </button>
        </Header>
        <List list={list} />
        <Content className="content">
          <input
            onChange={(e) => {
              settext(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                {
                  addList();
                  settext("");
                }
              }
            }}
            value={text}
          ></input>
        </Content>
        <Footer onClick={addList}>확인</Footer>
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
