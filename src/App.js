import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import todosdata from "./todosdata";
export default function App() {
  const todoComponent = todosdata.map((item) => (
    <TodoItem key={item.id} text={item} checked={item} />
  ));

  return <div className="App">{todoComponent}</div>;
}
