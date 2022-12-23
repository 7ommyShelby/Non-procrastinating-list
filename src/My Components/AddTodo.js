import React, { useState } from 'react'
//i shall now use react router
// what is a react router-in a single page application that i have created i'd now add pages for about and home where it shall be displayed between the header and footer WITHOUT reloading


const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=> {
        e.preventDefault();  //to prevent the page from reloading
        if(!title || !desc){
            alert ("Do not chicken out");
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <>
            <div className='container'>
                <h3 className='text-center'>Add a Task</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Task to be done</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Do not Back Down! What's written shall be DONE</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">The Task</label>
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Add another TASK</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo
