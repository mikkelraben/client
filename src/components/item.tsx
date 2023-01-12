import * as React from "react"
import { Item } from "../interfaces/item";

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
      <div>
        <p style={{ color: props.item.done ? "green" : "black" }}>{props.item.data}</p>
        <input type = "checkbox" checked={props.item.done} onClick={toggleDone} readOnly={true}></input>
        <button onClick={deleteItem}>X</button>
      </div>
    );
};