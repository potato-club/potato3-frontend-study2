import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props) => {
    let lists = props.list;
  return (
    <ul>
      {lists.map((element) => (
        <li>
          {element} <FontAwesomeIcon icon={faTrash} className="trash" />
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
