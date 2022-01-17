import React, { useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function AddTaskModal({addTask}) {
  const [isOpen, setIsOpen] = useState(false);
  const [ taskTitle, setTaskTitle ] = useState('');
  const [ taskDes, setTaskDes ] = useState('');
  const handleChange = (e) => {
    setTaskTitle(e.currentTarget.value)
}
const handleChangeDes = (e)=>{
  setTaskDes(e.currentTarget.value);
}
const handleSubmit = (e) => {
  e.preventDefault();
  addTask(taskTitle,taskDes);
  setTaskTitle("");
  setTaskDes("");
}

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const customStyles = {
    content: {
      top: '40%',
      borderRadius: '8px',
      left: '50%',
      right: 'auto',
      padding:0,
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div >
      <button className="bg-blue-600 hover:bg-blue-900  shadow-2xl px-11 py-3 rounded-xl" onClick={toggleModal}> 
      <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className=" text-white fill-current"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
    </button>

    
      <Modal
       style={customStyles}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        
      >
       
        
        <div className="">

          <div className="flex justify-between grid-cols-2 p-3 bg-blue-400">
          <h3 className="bg-blue-400 px-5  text-white rounded-xl"> Add New Task</h3>
         
         <button
          className="self-start transition rounded-full hover:bg-blue-600"
          onClick={toggleModal}
        >
         <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="white"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
        </button>
        </div>
        <form className="flex flex-col p-3 space-y-4 sm:w-96">
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={handleChange}
            value={taskTitle}
            type="text"
            name={'title'}
            id={'title'}
            placeholder={'Title*'}
            className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <textarea class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" value={taskDes} onChange={handleChangeDes}>

          </textarea>
          {/* {error && <p className="mb-3 text-sm text-red-600">{error}</p>} */}
          {/* <select 
            // onChange={handleChange}
            name={'status'}
            // value={formData.status}
            className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="In Progress">In Progress</option>
            <option value="Paused">Paused</option>
            <option value="Done">Done</option>
          </select> */}
        
          <button
            className="px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400"
            onClick={handleSubmit}
          >
          Add
          </button>
        </form>
      </div>
      </Modal>
    </div>
  );
}


// import React, { memo } from 'react';

// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//       top: '40%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };
//     Modal.setAppElement('#root');

// const AddTaskModal = ({
//   isOpen,
//   closeModal,
//   handleChange,
//   formData,
//   error,
//   onsubmit,
//   buttonTitle,
//   click,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={click}
//       style={customStyles}
//       contentLabel="Example Modal"
//     >
//       <div className="flex flex-col">
//           <h3> Add New Task</h3>
//         <button
//           className="self-end p-2 transition rounded-full hover:bg-gray-200"
//           onClick={click}
//         >
//          <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="24px"
//       viewBox="0 0 24 24"
//       width="24px"
//       fill="#000000"
//     >
//       <path d="M0 0h24v24H0V0z" fill="none" />
//       <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
//     </svg>
//         </button>
//         <form className="flex flex-col p-3 sm:w-96">
//           <input
//             // eslint-disable-next-line jsx-a11y/no-autofocus
//             autoFocus
//             // onChange={handleChange}
//             // value={formData.title}
//             type="text"
//             name={'title'}
//             id={'title'}
//             placeholder={'Title*'}
//             className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
//           <select
//             // onChange={handleChange}
//             name={'status'}
//             // value={formData.status}
//             className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           >
//             <option value="In Progress">In Progress</option>
//             <option value="Paused">Paused</option>
//             <option value="Done">Done</option>
//           </select>
        
//           <button
//             className="px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400"
//             // onClick={onsubmit}
//           >
//             {buttonTitle}
//           </button>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default memo(AddTaskModal);