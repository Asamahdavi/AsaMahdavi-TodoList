import React from 'react';
import "../style/Home.css";
import TaskCard from "./TaskCard";

export default function TaskLanding() {

    return (
    <>
      <div className="bg-white justify-center items-center flex ">
                  
        <section className="HomeForm justify-center items-center flex " id="Homeform">
            
          <div
            className=" bg-blue-300 pl-14 w-2/3 grid grid-cols-2 gap-2 content-center 
         justify-around items-center rounded-xl 
          xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  py-7 px-0"
          >
            <TaskCard
            
              title={"Invitation !"}
              prag={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              }
            />
            <TaskCard
              title={"Invitation !"}
              prag={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              }
            />
            <TaskCard
              title={"Invitation !"}
              prag={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              }
            />
            <TaskCard
              title={"Invitation !"}
              prag={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              }
            />
            <TaskCard
              title={"Invitation !"}
              prag={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              }
            />
              </div>
          
        </section>
      
      </div>
    
    </>
  );
}
