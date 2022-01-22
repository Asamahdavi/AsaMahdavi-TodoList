import React, { useState } from "react";
import "../style/Home.css";
import AddTaskModal from "./AddTaskModal";
import Header from "./Header";
import TaskLanding from "./TaskLanding";
import data from "../Data.json";

export default function Home() {
  const [tasks, setTasks] = useState(data);
  const [id, setId] = useState(0);
  const [tsk, setTsk] = useState({
    id: id,
    title: "",
    Description: "",
    status: "InProgress",
  });

  const handleAdd = (title, desc) => {
    let copy = [...tasks];
    copy = [
      ...copy,
      {
        id: id + 1,
        title: title,
        Description: desc,
        status: "InProgress",
      },
    ];
    setTasks(copy);
    setTsk({ id: id + 1, title: "", Description: "", status: "InProgress" });
  };

  return (
    <>
      <section className="  justify-center items-center  " id="Homeform">
        <div className="bg-blue-600 rounded-2xl w-full pt-3 px-0">
          <Header />
          <div className="bg-blue-300  px-48 rounded-t-2xl">
            <div className=" sm:left-0 sm:pl-1 sm:ml-1 left-96 pl-96 ml-96 py-5">
              <AddTaskModal addTask={handleAdd} />
            </div>
          </div>
          <TaskLanding
            tsk={tsk}
            tasks={tasks}
            setTasks={setTasks}
            setId={setId}
            id={id}
          />
        </div>
      </section>
    </>
  );
}
