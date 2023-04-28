import React, {createContext, useState, useContext} from 'react'
import { v1 } from "uuid"


const TodoContext = createContext()
export const useTasks = () => useContext(TodoContext)

export default function ContextApi({ children }) {

  const [tasks, setTasks] = useState([])

  const addTask = task =>
      setTasks([
          ...tasks,
          {
              id: v1(),
              task,
              complete: false
          }
      ])



  const updateTask = (id, data) => {
    setTasks(tasks.map((taskdata) => (taskdata.id === id ? { ...taskdata, task: data } : taskdata)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // 6
  return (
      <TodoContext.Provider value={{ tasks, addTask, deleteTask,updateTask }}>
          { children }
      </TodoContext.Provider>
  )
}