import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ itemIndex, value, deleteList }) => {
  return (
    <li>
      {value}
      <FontAwesomeIcon
        icon={faTrash}
        className="trash"
        onClick={() => deleteList(itemIndex)}
      />
    </li>
  );
};

export default ListItem;
