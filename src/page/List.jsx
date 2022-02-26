import React from "react";
import ListItem from "./ListItem";

const List = ({list}) => {
  let newList = list.map((element, index) => (
      <ListItem list={list} key={index} value={element}></ListItem>
  ));
  return (
    <ul>
      {newList}
    </ul>
  );
};

export default List;
