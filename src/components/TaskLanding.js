import React from "react";
import "../style/Home.css";
import TaskCard from "./TaskCard";

export default function TaskLanding({ toDoList, updateSatatus }) {
  return (
    <>
      <div className="bg-blue-300 justify-center items-center flex ">
        <section
          className="HomeForm justify-center items-center flex "
          id="Homeform"
        >
          <div
            className=" bg-blue-300 pl-14 w-full grid grid-cols-2 gap-2 content-center 
         justify-around items-center rounded-xl 
          xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1   px-0"
          >
            {toDoList.map((todo) => {
              return (
                <TaskCard
                  title={todo.title}
                  prag={todo.Description}
                  status={todo.status}
                  updateSatatus={updateSatatus}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
