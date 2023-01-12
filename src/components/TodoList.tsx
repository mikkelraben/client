import * as React from "react"
import { Todo } from "./item";
import { Item } from "../interfaces/item";

export interface TodoListProps {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const TodoList = (props: TodoListProps) => {
    const addItem = () => {
        const newTodo = {data:"Write Some Text", done: false};
        props.setItems([...props.items,newTodo])
    }

    const toggleCheck = (item: Item) => {
        const newTodos = props.items.map((todo) => {
            //for each todo check if it is THE ONE and set the done accordingly
            if(todo === item){
              todo.done = !todo.done;
            }
            return todo;
          });
          props.setItems(newTodos);
    }

    const updateText = (item: Item, text: string) => {
        const newTodos = props.items.map((todo) => {
            //for each todo check if it is THE ONE and set the done accordingly
            if(todo === item){
              todo.data = text;
            }
            return todo;
          });
          props.setItems(newTodos);
    }


    const deleteItem = (item: Item) => {
        const indexToRemove:number = props.items.indexOf(item);
        
        const newTodos:Array<Item> = props.items.filter((next,index) => index != indexToRemove);
        props.setItems(newTodos);
    }

    
    
    const itemList = props.items.map((item) => (
        <Todo key={props.items.indexOf(item)} item={item} items={props.items} setItems={props.setItems} deleteItem={deleteItem} toggleCheck={toggleCheck} updateText={updateText}/>
    ))

  return (
    <div>
        {props.items.length === 0 && <h2>It's quiet, too quiet</h2>}
        {props.items.length > 0 &&
            <div>{itemList}</div>
        }
        
        <button onClick={addItem}>Add Todo</button>
    </div>
  )
}

export default TodoList