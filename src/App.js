import React, { useState} from "react";
import './App.css';
//importing components
import Form from "./components/Form.js";
import TodoList from "./components/todolist";

function App() {
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>Fernando's Todo List</h1>
      </header>
      <Form 
        chicken={todos} 
        fryChicken={setTodos} 
        
      />
      <TodoList tacos={todos} fryChicken={setTodos} />
    </div>
  );
}

export default App;
