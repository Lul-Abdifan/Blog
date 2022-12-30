import React, { Component } from 'react'
import {useState} from 'react'
function App()
{
const [lists,setLists] =useState([]);
const [addTask,setAddTask] =useState("");
const handleInput=(event)=>{
  setAddTask(event.target.value)
}
const addTasks  =()=>{
  const taskObject={
    j:
  }
const tasksList =[...lists,addTask];
setLists(tasksList);
console.log(lists);
}
const deleteTask = (todoList) =>
{
  // const afterDeleted =
  // lists.filter((list)=>{
  //   if(list===todoList)
  //   {
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  const afterDeleted = lists.filter((li)=>li!==todoList)
setLists(afterDeleted)
  }



return (
  <div className="container">
    <h1>Diary</h1>
    <div className='inputes'>
      <input onChange={handleInput}/>
      <button onClick={addTasks}>Add your Diary</button>
    </div>
    <div className='lists'>
     <div>
     {lists.map((task)=>{return <div><h2>{task} 
     <button onClick={()=>deleteTask(task)}>X</button></h2></div>})}
      </div> 
      </div>
  </div>
)
}

export default App;
