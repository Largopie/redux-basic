import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (count = 0, action) => {
  if(action.type === "ADD") {
    console.log("they are telling me to add one");
  }
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({type: "ADD"});

console.log(countStore.getState());