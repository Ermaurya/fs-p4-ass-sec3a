import React from 'react'
import Task from './Task'
import { useTasks } from './ContextApi'

export default function MyTask() {
  // 2
  const { tasks } = useTasks()
  return (
    <table>
      <tbody className='body-style'>
        {
        
          tasks.map((task, idx) => 
            <Task key={idx} {...task} />
            
          )
        }
       
      </tbody>
    </table>
  )
}