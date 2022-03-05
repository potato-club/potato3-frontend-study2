import React, { useRef } from "react";
import styled from "@emotion/styled";
import "./TodoList.css";
import { useState } from "react";
import List from "./List";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { listState, textState } from "./state";

const TodoList = () => {
  const [list, setList] = useRecoilState(listState);
  const [text, setText] = useRecoilState(textState);
  const [modalIsopen, setModalIsopen] = useState(false);
  const inputRef = useRef(null);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      overflow: "visible",
    }
  };

  const addList = () => {
    let temp = [...list];
    setText("");
    inputRef.current.focus();
    text === "" ? setModalIsopen(true) : temp.push(text) && setList(temp);
  };

  const allDeleteList = () => {
    setList([]);
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
        <List />
        <Content className="content">
          <Input
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && addList();
            }}
            value={text}
            ref={inputRef}
          />
        </Content>
        <Footer onClick={addList}>확인</Footer>
        <Modal
          isOpen={modalIsopen}
          style={customStyles}
          onRequestClose={() => setModalIsopen(false)}
          shouldCloseOnOverlayClick={false}
        >
          내용을 입력해주세요 !!
          <CustomFontAwesomeIcon
            icon={faXmark}
            onClick={() => setModalIsopen(false)}
            className="deleteModal"
          />
        </Modal>
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

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: -9px;
  bottom: 45px;
  font-size: 29px;
  :hover {
    color: lightslategray;
  }
`;
