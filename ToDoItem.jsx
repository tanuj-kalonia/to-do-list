
import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
        // onClicking we are calling the onChange function and passing id as parameter, so that delete func can recieve the id
      }}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
