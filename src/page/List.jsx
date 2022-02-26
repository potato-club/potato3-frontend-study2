import React from "react";
import ListItem from "./ListItem";
import styled from "@emotion/styled";

const List = ({ list, deleteList}) => {
  let newList = list.map((element, index) => (
    <ListItem
      key={index}
      value={element}
      deleteList={deleteList}
    ></ListItem>
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
