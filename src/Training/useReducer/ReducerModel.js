import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Addtask from './Addtask'
import Tasklist from './Tasklist'

function reducer (tasks, action) {
    switch (action.type) {
        case 'add': {
            return [...tasks, {
                id: action.id,
                text: action.text,
            }]
        }

        case 'edit' : {
            return tasks.map(t => 
                t.id === action.task.id ? action.task : t
            )
        }

        case 'delete' : {
            return tasks.filter(t => t.id !== action.id)
        }
    
        default: {
            throw Error('unknown action : ' + action.type)
        }
    }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

function ReducerModel(props) {
    const [tasks, dispatch] = useReducer(
        reducer, initialTasks
    )

    function handleEdit(task) {
        dispatch({
            type: 'edit',
            task: task
        })
    }

    function handleDelete(taskId) {
         dispatch({
            type: 'delete',
            id: taskId
         })
    }

    function addTask(text) {
        dispatch({
            type: 'add',
            id: nextId++,
            text: text
        })
    }
  return (
    <div>
      <Addtask addTask={addTask} />
      <Tasklist tasks = {tasks} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  )
}

ReducerModel.propTypes = {

}

export default ReducerModel

