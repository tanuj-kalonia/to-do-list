import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItems() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => {
            return (
              <ToDoItem
                key={index} // we can identify, which item we are clicking on, so that we can delete
                id={index}
                text={toDoItem}
                onChecked={deleteItem}
              /> // adding each items in the array using map method
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
