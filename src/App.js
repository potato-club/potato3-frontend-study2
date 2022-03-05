import "./App.css";
import TodoList from "./page/TodoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
