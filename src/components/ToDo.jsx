import React, { useState } from 'react'


const ToDo = () => {
  const [addToDo, setAddToDo] = useState('')
  const [toDo, setToDo] = useState([])

  const createToDo = (e) => {
    e.preventDefault();
    const toDoCopy = [...toDo, {item: addToDo, isDone: false}]
    setToDo(toDoCopy)
    setAddToDo('')
  }

  const deleteToDo = (e) => {
    e.preventDefault();
    const toDoCopy = [...toDo]
    toDoCopy.splice(e.target.id, 1)
    setToDo(toDoCopy)
  }

  const strike = (e) => {
    const toDoCopy = [...toDo];
    toDoCopy[e.target.id] = {
      item: toDo[e.target.id].item,
      isDone: !toDo[e.target.id].isDone
    }
    setToDo(toDoCopy);
  }
  

  return (
    <div>
      <h1>To Do's, not Todos Los Dias!</h1>
      <form onSubmit={createToDo}>
        <input type="text" value ={addToDo} onChange={(e) => setAddToDo(e.target.value)}/>
        <input type="submit" value='Add' />
      </form>
      <div>
        {toDo.length >= 1 ? 
          <ul>
            {toDo.map((item, i) =>
              <li key={ i } >
                <span className={ item.isDone ? 'toDoStrike' : 'toDo' }>{ item.item }</span>
                <button id={i} onClick={ strike }>☑</button>
                <button id={i} onClick={ deleteToDo }>Delete</button>
              </li>
            )}
          </ul> : ''
        }
      </div>
    </div>
  )
}

export default ToDo;