import logo from './logo.svg'; //parent to todos.js
import './App.css';
import Header from './My Components/Header'; // in cases of export default we can use the names but in cases of named(export const) exports we have to use import {name} from ./file path
import Footer from './My Components/Footer';
import Todos from './My Components/Todos';
import AddTodo from './My Components/AddTodo';
import About from './My Components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am onDelete", todo); // using this will not reflect any changes upon hitting the delete button therfore we would need a useState hook
    //deleting this way in react will not work
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1); 
    //this code is for my own sake (console.log) while builing this project
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log('I am adding this task', title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo); // now "let todos=[{}]"" this was somethign which was used originally but since we want something which reflects updates as we press the button so we are going to use the hooks
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return ( // consider app.js is a father for todos.js app.js is handing over his 2 properties to his child todos namely todos and onnDelete so that todos can utilize them according to his needs, now todos will store these 2 properties in props (props.todos, props.onDelete)
    <>
      <Router>
        <Header title="MY TODO LIST" /> 
        <Routes>

          <Route path="/" element={<><AddTodo addTodo={addTodo}/>

                <Todos todo={todos} onDelete={onDelete}/></>}/>

          <Route path="/about" element={<About/>}/>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
