import React from "react";
import ListItem from "./ListItem";
import styled from "@emotion/styled";

const List = ({ list, deleteList }) => {
  return (
    <ListWrap>
      <ul>
        {list.map((element, index) => (
          <ListItem itemIndex={index} value={element} deleteList={deleteList} />
        ))}
      </ul>
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
