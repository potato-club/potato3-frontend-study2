import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ key, value, deleteList}) => {

  return (
    <li>
      { value }
      <FontAwesomeIcon icon={faTrash} className="trash" onClick={deleteList(key)} />
    </li>
  );
};

export default ListItem;
