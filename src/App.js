import './App.css';
import styled from "@emotion/styled";
import { TodoList } from "./page/TodoList";
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <Wrapper>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #e3e4fc, #a1ecd0);
  display: flex;
  justify-content: center;
  align-items: center;
`;
