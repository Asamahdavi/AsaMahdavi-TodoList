import React, { useState } from 'react';
import "../style/Home.css";
import AddTaskModal from './AddTaskModal';
import Header from './Header';
import TaskLanding from './TaskLanding';
import data from '../Data.json';


export default function Home() {

  const [ toDoList, setToDoList ] = useState(data);
  const addTask = (title,desc  ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, title: title, Description:desc ,complete: "In Progress" }];
    setToDoList(copy);
  }

    return (
    <>
      {/* <div className="bg-blue-700  p-7 flex object-center justify-center items-center rounded-2xl  "> */}
                  
        <section className="  justify-center items-center  " id="Homeform"> 
            
          <div
            className="bg-blue-600 rounded-2xl   w-full   pt-3
      
            px-0"
          >
           
       <Header/>
     <div className='bg-blue-300  px-48
      rounded-t-2xl'>
     <div className='bg-blue-300 left-96 pl-96 ml-96 py-5'>
       
       <AddTaskModal addTask={addTask}  />
  
       </div>
       
     </div>

       <TaskLanding toDoList={toDoList} />
     </div> 
               
          
        </section>
      
 {/* </div> */}
    
    </>
  );
}
