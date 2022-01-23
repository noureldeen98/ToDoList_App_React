

const { useState } = require("react")


const ToDoApp = ()=>{

     
    const[task ,setTask]= useState("");
     
    const handleChange=(e)=>{
       setTask(e.target.value)
    }


////#region task List

const[taskList,setTaskList] = useState([]);


    const handleAddButton =()=>{
        // console.log(task)
     if(task !== " "){
         const taskDetails={
             id:Math.random()*1000,
             task:task,
             isCompleted:false
         }
         setTaskList([...taskList,taskDetails])
     }

    }

const hendleDelete=(e,id)=>{
    e.preventDefault();
    setTaskList(taskList.filter((t)=>t.id != id))
}

    return(
      
      <>
      <div className="container">
      <div className="card" >
   <h5>Welcome to our todo list</h5>
  <div className="card-body">
  <input type="text"  name="text" placeholder="enter your task here"  id="inputOfTasks" onChange={(e)=>handleChange(e)}/>
       <button  type="button" className="btn btn-primary addTaskButton" name="button" onClick={()=>handleAddButton()}> Add your task</button>
  
       {taskList !==[]? 
        <ul>
            {taskList.map((theTask)=>{
                return (
                    <>
                    <li key={theTask.id} >{theTask.task} 
                    {/* <button type="button" name="complete" className="completed btn btn-success">Completed</button> */}
                    <button type="button" name="delete" className="deleted     btn btn-danger" onClick={(e)=>hendleDelete(e,theTask.id)}>Delete</button>
                    </li> 

                    </>
            )
                }
            )}
            
        </ul>
       : "There is no tasks to do"} 


  </div>
</div>
</div>
</>

 
    )
}

export default ToDoApp;