import React, { useState } from 'react';
import {mainJson} from './mainJson'
import './App.css';

const App = ({entity, isEntityOpen}) => {
  const [isOpen, setIsOpen] = useState(isEntityOpen !== undefined ? isEntityOpen : true)
  const treeEntity = entity || mainJson

  const extendEntity = (entity) =>{
    return <App entity={entity} isEntityOpen={isOpen}/>
  }
  return (
    <div className="App">
    {treeEntity.child_runs.map(level=>{
      const onOpen = ()=> setIsOpen(!isOpen)
      return (
        <ol>
        <li><button onClick={onOpen}> {isOpen ? '-' : '+'} </button>
        <div> {level.step.title}</div>      
        {isOpen && extendEntity(level)}  
       </li>
       </ol>
      )

    }
    )}
    </div>
  );
}

export default App;
