import React, { useState } from "react";

const Status = (status, updateSatatus) => {
  const [valueState, setValueState] = useState();

  const handler = (event) => {
    const value = event.value;
    setValueState(value);
    event.preventDefault();
    updateSatatus(valueState);
    // setValueState("");
  };

//   const s =(state)=>{
//     //    console.log(JSON.stringify(state));
//       if (state ==="In Progress" ){
//           return <button>"In QA"</button>
         
//       }else if (state  === "To Do"){
//           return <button> "In Progress" </button>
//       }
//   }

  // const selectorOptions=(status)=>{

  //     if (status === "In Progress")
  //         return (
  //         <><option value="In Progress">In Progress</option><option value="In QA ">In QA</option></>
  //     )

  //     if (status === "To Do")
  //                             return (
  //                                 <>
  //                                    <option value="To Do">To Do </option>
  //                             <option value="In Progress ">In Progress</option>
  //                             </>
  //     }

//   if ((status === "In QA") ){
//     return (
//       <>
//         <div>
//           <select
//             onChange={handler}
//             name={"status"}
//             value={valueState}
//             className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           >
//             <option value="Done">Done </option>
//             <option value="To Do ">To Do </option>
//             <option value="In QA ">In QA</option>
//           </select>
//         </div>
//       </>
//     );
//   }
  return (
    <div>
    {/* {s(status)} */}
    </div>
  );

  //                     if (status === "To Do")
  //                         return (
  //                             <>
  //                                 <div>
  //                                     <select
  //                                         onChange={handler}
  //                                         name={"status"}
  //                                         value={valueState}
  //                                         className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
  //                                     >
  //                                 <option value="To Do">To Do </option>
  //                                 <option value="In Progress ">In Progress</option>
  //                                 </select>
  //                                 </div>
  //                             </>);
  //                     if (status === "In QA")
  //                         return (
  //                             <>

  //                                 <div>
  //                                     <select
  //                                         onChange={handler}
  //                                         name={"status"}
  //                                         value={valueState}
  //                                         className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
  //                                     >
  //                                 <option value="Done">Done </option>
  //                                 <option value="To Do ">To Do </option>{" "}
  //                                 <option value="In QA ">In QA</option>
  //                                 </select>
  //                                 </div>
  //                             </>);
  //                     if (status === "Done")
  //                         return (
  //                             <>
  //                              <div>
  //                                     <select
  //                                         onChange={handler}
  //                                         name={"status"}
  //                                         value={valueState}
  //                                         className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
  //                                     >
  //                                 <option value="Done">Done</option>
  //                                 <option value="Deployed">Deployed</option>
  //                                 </select>
  //                                 </div>
  //                             </>);

  //                     if (status === "Blocked")
  //                         return (
  //                             <>
  //                              <div>
  //                                     <select
  //                                         onChange={handler}
  //                                         name={"status"}
  //                                         value={valueState}
  //                                         className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
  //                                     >
  //                                 <option value="Blocked">Blocked</option>
  //                                 <option value="To Do">To Do</option>
  //                                 </select>
  //                                 </div>
  //                             </>);
};
export default Status;
//   const [valueState, setValueState] = useState();

//   const handler = (event) => {
//     const value = event.value;
//     setValueState(value);
//     event.preventDefault();
//     updateSatatus(valueState);
//     // setValueState("");
//   };

// render(){
//
//                 if (status === "In Progress")
//                     return (
//                         <>
//                             <div>
//                                 <select
//                                     onChange={handler}
//                                     name={"status"}
//                                     value={valueState}
//                                     className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                                 >
//                                     <option value="In Progress">In Progress</option>
//                                     <option value="In QA ">In QA</option>
//                                 </select>
//                             </div>
//                         </>);

//                 if (status === "To Do")
//                     return (
//                         <>
//                             <div>
//                                 <select
//                                     onChange={handler}
//                                     name={"status"}
//                                     value={valueState}
//                                     className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                                 >
//                             <option value="To Do">To Do </option>
//                             <option value="In Progress ">In Progress</option>
//                             </select>
//                             </div>
//                         </>);
//                 if (status === "In QA")
//                     return (
//                         <>

//                             <div>
//                                 <select
//                                     onChange={handler}
//                                     name={"status"}
//                                     value={valueState}
//                                     className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                                 >
//                             <option value="Done">Done </option>
//                             <option value="To Do ">To Do </option>{" "}
//                             <option value="In QA ">In QA</option>
//                             </select>
//                             </div>
//                         </>);
//                 if (status === "Done")
//                     return (
//                         <>
//                          <div>
//                                 <select
//                                     onChange={handler}
//                                     name={"status"}
//                                     value={valueState}
//                                     className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                                 >
//                             <option value="Done">Done</option>
//                             <option value="Deployed">Deployed</option>
//                             </select>
//                             </div>
//                         </>);

//                 if (status === "Blocked")
//                     return (
//                         <>
//                          <div>
//                                 <select
//                                     onChange={handler}
//                                     name={"status"}
//                                     value={valueState}
//                                     className="mb-3 border  border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                                 >
//                             <option value="Blocked">Blocked</option>
//                             <option value="To Do">To Do</option>
//                             </select>
//                             </div>
//                         </>);
//             }

//
//     };
