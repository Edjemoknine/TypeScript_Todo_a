export interface Todo{
    id:number,
    title:string,
    completed:boolean
}
// type Actions=
//    { type:"ADD";payload:string}|
//    { type:"REMOVE";payload:number}|
//    { type:"EDIT";payload:number};


// import React, { useReducer } from 'react';
// const  TodoReducer=(state:Todo[],action:Actions)=>{
// switch (action.type) {
//     case 'ADD':
//         return[
//             ...state,{id:Date.now(),title:action.payload,completed:false}
//         ];
//         case 'REMOVE':
//             return[
//                 state.filter(todo=> todo.id!== action.payload )
//             ];
//         case 'EDIT':
//             return[
//             state.map(todo=>todo.id=== action.payload ? {...todo, completed:!todo.completed}:todo)
//             ]

//     default:
//         break;
// }
// }
// const model:React.FC = () => {
//     const [state, dispatch] = useReducer(TodoReducer,[])
//     return (
//         <div>
        
//         </div>
//     );
// };

// export default model;


