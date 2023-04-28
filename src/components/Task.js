import React, { useState } from 'react'
import { useTasks } from './ContextApi'

const Task = ({id,task}) => {

    const { deleteTask, updateTask} = useTasks();

    const [editbtn, seteditbtn] = useState(false);

    const [editval, setEditValue] = useState(task);

    const edTask = () => {
        updateTask(id,editval);
        seteditbtn(!editbtn);
    };

  return (
    <>
    <tr>
    <td>

        <input type="text" value={editval} onChange={(e) => setEditValue(e.target.value)}/>
    </td>

       
        <td className='td-style'>
        {!editbtn ? <button onClick={() => seteditbtn(!editbtn)}><i class="fa-regular fa-pen-to-square"></i></button> :          
        <button onClick={edTask}><i class="fa-solid fa-floppy-disk"></i></button>
  }
        </td>
        <td className='td-style'>
            <button onClick={() => deleteTask(id)}><i class="fa-solid fa-trash-can"></i></button>
        </td>
    </tr>

    </>
  )
}

export default Task