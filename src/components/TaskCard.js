import AddTaskModal from "./AddTaskModal";

export default function TaskCard({  title, prag }) {
    return (
      <div className="at-container  w-40">
        <div className=" bg-white at-item max-w-sm w-72 h-4/5   rounded-xl overflow-hidden shadow-lg">     
          <div className="px-6 py-4 ">
            <div className="text-left font-bold py-4 text-2xl mb-2 text-black ">{title}</div>
            <p className="text-left text-gray-700 h-64 text-base ">{prag}</p>
            <AddTaskModal/>
          </div>
        </div>
      </div>
    );
  }