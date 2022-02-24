import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export function Item({ list, onRemove }) {
  return (
    <ItemList>
      {list.map(data => (
        <ItemWrapper key={data.id}>
          <div>{data.value}</div>
          <RemoveIcon onClick={() => onRemove(data)}>
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
    opacity: 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RemoveIcon = styled.div`
  cursor: pointer;
`;