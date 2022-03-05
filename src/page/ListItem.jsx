import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { listState } from "./state";

const ListItem = ({ itemIndex, value }) => {
  const [list, setList] = useRecoilState(listState);

  const deleteList = (key) => {
    setList(list.filter((element, index) => index !== key));
  };

  return (
    <ListLi>
      {value}
      <CustomFontAwesomeIcon
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

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 30px;
`;
