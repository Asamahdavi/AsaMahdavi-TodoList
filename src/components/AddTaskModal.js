import React, { useState } from "react";


import Modal from "react-modal";

Modal.setAppElement("#root");

export default function AddTaskModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="App">
      <button onClick={toggleModal}> <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className="text-blue-500 fill-current"
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
    </button>

      <Modal
       style={customStyles}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div className="flex flex-col">
          <h3> Add New Task</h3>
         <button
          className="self-end p-2 transition rounded-full hover:bg-gray-200"
          onClick={toggleModal}
        >
         <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
        </button>
        
        <form className="flex flex-col p-3 sm:w-96">
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            // onChange={handleChange}
            // value={formData.title}
            type="text"
            name={'title'}
            id={'title'}
            placeholder={'Title*'}
            className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {/* {error && <p className="mb-3 text-sm text-red-600">{error}</p>} */}
          <select
            // onChange={handleChange}
            name={'status'}
            // value={formData.status}
            className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="In Progress">In Progress</option>
            <option value="Paused">Paused</option>
            <option value="Done">Done</option>
          </select>
        
          <button
            className="px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400"
            // onClick={onsubmit}
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