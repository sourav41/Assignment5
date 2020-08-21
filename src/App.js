import React, { useState } from 'react';
import ToDOLists from './component/ToDoLists'
import"./component/display.css";
import ToDoLists from './component/ToDoLists';
const App=()=>{
  const [inputList,setInputList]=useState();
  const [Items, setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
   setItems((oldItems)=>{
     return [...oldItems,inputList];
   })
   setInputList('');
  }
  const deleteItems=(id)=>{
   setItems((oldItems)=>{
     return oldItems.filter((arrElm,index)=>{
       return index!==id;
     })
   })
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type="text" value={inputList} placeholder="add a items" onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>
         <ol>
          { Items.map((itemval,index) => {
            return <ToDoLists key={index} text={itemval} id={index}
             onSelect={deleteItems}
            />;
           })}
         </ol>
      </div>
    </div>

    </>
  )
}


export default App;
