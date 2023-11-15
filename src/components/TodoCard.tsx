import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd';
type Props={
    index:number
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoCard = ({todo,setTodos,todos,index}:Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.title)

    const handleDone=(id:number)=>{
    setTodos(todos.map(todo=> todo.id === id ? {...todo, completed:!todo.completed}: todo))
    }
    const handleDelete=(id:number)=>{
        setTodos(todos.filter(todo=> todo.id !== id))
    }
    const inputRef=useRef<HTMLInputElement>(null)
    const handleEdit=()=>{
        if(!todo.completed){
        setEdit(prev=> !prev)
        }
    }
    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        setTodos(todos.map(term=>term.id ===todo.id ? {...term, title:editTodo}:term))
        setEdit(false)
    }
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
       {(provided)=>(
         <form className='todocard' onSubmit={handleSubmit} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
         {edit?(
             <input ref={inputRef} type="text" onChange={(e)=> setEditTodo(e.target.value)} value={editTodo} />
         ):(

             todo.completed ? <s className='text'>{todo.title}</s>:<span className='text'>{todo.title}</span>
         )}

         <div>
             <span onClick={handleEdit} className='icon'><AiFillEdit/></span>
             <span onClick={()=>handleDelete(todo.id)} className='icon'><AiFillDelete/></span>
             <span onClick={()=>handleDone(todo.id) } className='icon'><MdDone/></span>
         </div>
         
     </form>
       )}
        </Draggable>
    );
};

export default TodoCard;