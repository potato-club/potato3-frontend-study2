import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const ListItem = ({ itemIndex, value, deleteList }) => {
  return (
    <ListLi>
      {value}
      <FontAwesomeIcon
        icon={faTrash}
        className="trash"
        onClick={() => deleteList(itemIndex)}
      />
    </ListLi>
  );
};

export default ListItem;

const ListLi = styled.li`
  padding: 10px 10px;
`;
