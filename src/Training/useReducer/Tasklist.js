import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Tasklist({
    tasks,
    handleEdit={handleEdit},
    handleDelete = {handleDelete}
}) {
  return (
    <div>
      <ul>
      {tasks.map(task => (
        <li key={task.id}>
        <Task
        task={task}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        />
        </li>
      ))}
      </ul>
    </div>
  )
}

function Task({task, handleEdit, handleDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if(isEditing) {
        taskContent = (
            <div>
            <input value={task.text} onChange = {e => {
                handleEdit({
                    ...task,
                    text: e.target.value
                })
            }} />
            <button onClick={() => setIsEditing(false)}>Save</button>
            </div>
        )
    } else {
        taskContent = (
            <div>
            {task.text}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )
    }

    return (
        <label>
        {taskContent}
        <button onClick={() => handleDelete(task.id)} >Delete</button>
        </label>
    )
}

export default Tasklist

