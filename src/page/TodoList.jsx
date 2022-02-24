import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Item } from "./Item";
export function TodoList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const itemId = useRef(0);
  const inputRef = useRef(null);

  const onChange = e => {
    setItem(e.target.value);
  };

  const onInsert = () => {
    if (!item) {
      return;
    }
    const newItem = {
      id: itemId.current,
      value: item,
      // checked: false,
    };
    setList(list.concat(newItem));
    setItem("");
    inputRef.current.focus();
    itemId.current += 1;
  };

  const onEnter = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const onRemove = (item) => {
    const newList = list.filter((data) => data.id !== item.id);
    setList(newList);
  }



  return (
    <Wrapper>
      <Title>Todo List</Title>
      <Item list={list} onRemove={onRemove}/>
      <Input
        placeholder="입력해주세요"
        onChange={onChange}
        onKeyPress={onEnter}
        value={item}
        ref={inputRef}
      />
      <InsertButton onClick={() => onInsert()}>
        <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x" />
      </InsertButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 50px;
  background: linear-gradient(250deg, #8edff5, #3861e8);
  font-size: 30px;
  color: white;
  font-weight: 500;
  border-radius: 40px 40px 0 0;
`;


const Input = styled.input`
  width: 500px;
  height: 30px;
  border: none;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  :focus {
    outline: none;
    border: 1px solid #000000;
  }
`;

const InsertButton = styled.button`
  width: 500px;
  height: 50px;
  background: linear-gradient(250deg, #8edff5, #3861e8);
  border: 0;
  padding: 0;
  cursor: pointer;
  :active {
    transform: scale(0.99);
    /* box-shadow: 2px 2px 0 #000000; */
  }
`;
