import React, { useState } from 'react'
import { useTasks } from './ContextApi'

export default function CreateTask() {

  const [task, setTask] = useState('')
  const { addTask } = useTasks()

 
  const submit = e => {
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  return (
 
    <form onSubmit={submit}>
    
      <input type="text" value={task} placeholder="write your task..." onChange={e => setTask(e.target.value)} required />
      <button>Add</button>
    </form>
  )
}