import { atom } from "recoil";

let textState = atom({
  key: "textState",
  default: "",
});

let listState = atom({
  key: "listState",
  default: [],
});


export {textState, listState};
