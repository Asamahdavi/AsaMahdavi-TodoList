import { useState } from "react";

export default function TaskCard({
  title,
  prag,
  status,
  setTasks,
  setId,
  id,
  tasks,
}) {
  const [tsk, setTsk] = useState({ title: title, desc: prag, status: status });

  function handleStatus(e) {
    setTsk({ ...tsk, status: e.target.value });

    const task = { ...tasks, tsk, status: e.target.value };
    console.log(e.target.value);
    for (const t in tasks) {
      let temp = tasks;
      temp[t] = task;
      console.log(temp[t]);

      setTasks(temp);
      break;
    }
    setId(id + 1);
  }
  return (
    <div className="at-container  w-40">
      <div className=" bg-white at-item max-w-sm w-72 h-4/5   rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4 ">
          <div className="text-left font-bold py-4 text-2xl mb-2 text-black ">
            {title}
          </div>
          <p className="text-left text-gray-700 h-64 text-base ">{prag}</p>
          <div className="flex justify-between grid-cols-2 p-3">
            <select onChange={handleStatus} value={status}>
              <option
                value="Todo"
                disabled={
                  tsk.status === "InProgress" ||
                  tsk.status === "Done" ||
                  tsk.status === "Deployed"
                }
              >
                Todo
              </option>
              <option value="InProgress" disabled={tsk.status !== "Todo"}>
                InProgress
              </option>
              <option value="Blocked" disabled={tsk.status !== "InProgress"}>
                Blocked
              </option>
              <option value="InQA" disabled={tsk.status !== "InProgress"}>
                InQA
              </option>
              <option value="Done" disabled={tsk.status !== "InQA"}>
                Done
              </option>
              <option value="Deployed" disabled={tsk.status !== "Done"}>
                Deployed
              </option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="text-blue-500 fill-current justify-end"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <g>
                    <path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z" />
                  </g>
                  <g>
                    <path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
