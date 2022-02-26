import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ list, key, value }) => {
  const deleteList = (e) => {
    const newList = list.filter((element) => element.key !== e.key);

  };
  return (
    <li>
      {{ value }}
      <FontAwesomeIcon icon={faTrash} className="trash" onClick={deleteList} />
    </li>
  );
};

export default ListItem;
