import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ListState from '../state/ListState';
import { useRecoilValue } from "recoil";

export function ListItem({ onRemove, onToggle }) {
  const list = useRecoilValue(ListState);
  return (
    <ItemList>
      {list.map(data => (
        <ItemWrapper onClick={() => onToggle(data.id)} key={data.id}>
          <Item checked={data.checked}>{data.value}</Item>
          <RemoveIcon onClick={(e) => {
            e.stopPropagation();
            onRemove(data.id)}
          }>
            <FontAwesomeIcon icon={faTrashCan} color="grey" />
          </RemoveIcon>
        </ItemWrapper>
      ))}
    </ItemList>
  );
}

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: #e2daff;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  padding: 2px;
  ${(props) => 
  props.checked && css`
    text-decoration: line-through;
    color: #b1b1b1;
  `}
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #b743c7;
  padding: 5px 5px;
  margin: 5px 0;
`;

const RemoveIcon = styled.div`
  padding: 2px;
  cursor: pointer;
  align-self: center;
`;