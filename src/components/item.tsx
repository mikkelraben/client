import * as React from "react"
import { Item } from "../interfaces/item";
import "../css/item.css"

export interface TodoProps {
  item: Item;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  deleteItem: (item: Item) => void;
  toggleCheck: (item: Item) => void;
}

export const Todo: React.FC<TodoProps> = props => {
    const toggleDone = () => {
      props.toggleCheck(props.item);
    }

    const deleteItem = () => {
      props.deleteItem(props.item);
    }

    return (
      <div className="item">
        <p style={{ textDecoration: props.item.done ? "line-through 2px" : "none" }}>{props.item.data}</p>
        <input className="itemCheckbox" type = "checkbox" checked={props.item.done} onClick={toggleDone} readOnly={true}></input>
        <button className="itemButton" onClick={deleteItem}>X</button>
      </div>
    );
};