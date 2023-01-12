import React from 'react';
import './App.css';
import "./components/item"
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import { Item } from './interfaces/item';
import axios from 'axios';


function App() {

  const [todos, setTodos] = useState<Array<Item>>([]);

  const database: string = "https://todoappdatabase.azurewebsites.net/";

  async function fetchData() {
    await axios.get(database).then(response => {
      if(response.status === 200){
        setTodos(response.data);
      }

    }).catch(error => console.log(error));
  }

  async function addTodo(item: Item) {
    await axios.post(database,item).then(response => {
      if(response.status === 201){
        var newTodo: Item = response.data;

        setTodos([...todos,newTodo]);
      }else{
        console.log(response.statusText);
      }

    }).catch(error => console.log(error));
  }

  async function deleteTodo(item: Item) {


  await axios.delete(database+item.id,item).then(response => {
    if(response.status === 204){
      const indexToRemove:number = todos.indexOf(item);
      
      const newTodos:Array<Item> = todos.filter((next,index) => index !== indexToRemove);
      setTodos(newTodos);
    }else{
      console.log(response.statusText);
    }

    }).catch(error => console.log(error));
  }

  async function changeTodo(item: Item) {
    const newTodos = todos.map((todo) => {
    //for each todo check if it is THE ONE and set the done accordingly
    if(todo === item){
      todo.done = !todo.done;
    }
    return todo;
  });

  await axios.put(database+item.id,item).then(response => {
    if(response.status === 204){
      setTodos(newTodos);
    }else{
      console.log(response.statusText);
    }

  }).catch(error => console.log(error));
  }

  //fetches appointments from the server
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className="App">
      <TodoList items={todos} setItems={setTodos} addTodo={addTodo} deleteTodo={deleteTodo} changeTodo={changeTodo}/>
    </div>
  );
}

export default App;
