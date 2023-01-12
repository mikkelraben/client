import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/item"
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import { isTemplateSpan } from 'typescript';
import { Item } from './interfaces/item';


function App() {

  const [todos, setTodos] = useState<Array<Item>>([]);

  return (
    <div className="App">
      <TodoList items={todos} setItems={setTodos}/>
    </div>
  );
}

export default App;
