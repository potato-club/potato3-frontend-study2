import React from "react";
import ListItem from "./ListItem";
import styled from "@emotion/styled";

const List = ({ list }) => {
  let newList = list.map((element, index) => (
    <ListItem list={list} key={index} value={element}></ListItem>
  ));
  return (
    <ListWrap>
      <ul>{newList}</ul>
    </ListWrap>
  );
};

export default List;

const ListWrap = styled.div`
  height: 445px;
  font-family: monospace;
  background-color: rgb(217, 245, 244);
  overflow-y: scroll;
`;
