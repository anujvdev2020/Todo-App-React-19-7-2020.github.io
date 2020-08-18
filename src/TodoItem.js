import React from "react";
import "./styles.css";

function TodoItem(props) {
  return (
    <div className="todo-Item">
      <input type="checkbox" checked={props.checked.completed}/>
      <p contentEditable="true">{props.text.text}</p>
    </div>
  );
}
export default TodoItem;
