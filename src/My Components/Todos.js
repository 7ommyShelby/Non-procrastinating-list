import React from 'react' //child, and also a father(parent) to todoitem.js
import TodoItem from './TodoItem';
//I have used map() because it shall help me to iterate through all the array elements. A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.Calls a defined callback function on each element of an array, and returns an array that contains the results.
const Todos = (props) => { // if i write {todos, on delete} then i won't need to mention props.onDelete props.todo in places but since i have mentioned props therefore i have to write the entire thing... I have used both the examples in diffferent js files.. check todoitem for another way of writing this
let myStyle={
  minHeight:"70vh",
  margin: "3px auto"
}
  return (
    <div className='container' style={myStyle}>
      <h1 className='text-center my-3'>Todos list</h1>
      {props.todo.length === 0 ? "Take rest" :
        props.todo.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          );
        })
      }
    </div>
  )
}

export default Todos;