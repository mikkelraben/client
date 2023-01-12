import * as React from "react"
import { useState } from "react";
import { Todo } from "./item";
import { Item } from "../interfaces/item";
import "../css/todoList.css"

export interface TodoListProps {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    addTodo: (item: Item) => void;
    deleteTodo: (item: Item) => void;
    changeTodo: (item: Item) => void;
}

const TodoList = (props: TodoListProps) => {
  const [newTodoText, setNewTodoText] = useState<string>("Type something");

    const addItem = () => {
        const newTodo:Item = {id: "noID",data:newTodoText, done: false};
        props.addTodo(newTodo);
    }

    const toggleCheck = (item: Item) => {
      props.changeTodo(item);
    }

    const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodoText(e.target.value);
    }

    const deleteItem = (item: Item) => {
      props.deleteTodo(item);
    }

    
    
    const itemList = props.items.map((item) => (
        <Todo key={props.items.indexOf(item)} item={item} items={props.items} setItems={props.setItems} deleteItem={deleteItem} toggleCheck={toggleCheck}/>
    ))

  return (
    <div>
        {props.items.length === 0 && <h2>It's quiet, too quiet</h2>}
        {props.items.length > 0 &&
            <div>{itemList}</div>
        }
        <div className="AddTodoDiv">
          <div className="inputBorder">
            <input className="dataInput" value={newTodoText} onChange={e => updateText(e)}></input>
            <button className="addButton" onClick={addItem} style={{color: props.items.length > 19 ? "grey" : "black"}}>Add Todo</button>
          </div>
        </div>
        <div className="whiteSpace"></div>
    </div>
  )
}

export default TodoList