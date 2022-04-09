import React from "react";
import ListItem from "./ListItem";
import styled from "@emotion/styled";
import { listState } from "./state";
import { useRecoilValue } from "recoil";

const List = () => {
  const list = useRecoilValue(listState);
  return (
    <ListWrap>
      <ListUl>
        {list.map((element, index) => (
          <ListItem
            key={index}
            itemIndex={index}
            value={element}
          />
        ))}
      </ListUl>
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

const ListUl = styled.ul`
  list-style: none;
  padding: 10px 10px;
  position: relative;
`;
