import React from 'react'//child to todos.js and app.js

const TodoItem = ({ todo, onDelete }) => { // the curly braces in the parenthesis is to take it directly from the object itself, Because of curly braces i can call the individual items in the props rather than mentioning the props(just another way of doing things)destructuring javascript. if i write props here then i'll have to use props.todo and props.onDelete in places where todo and onDelete are mentioned
  return (
    // todoitem is a child to todos.js, todos.js is handing over 2 propperties one of which he got from app.js(onDelete) and another which he made himself(todos)
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
      <hr />
    </>
  )
}

export default TodoItem;


