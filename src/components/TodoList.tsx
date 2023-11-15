import React from 'react';
import { Todo } from '../model';
import TodoCard from './TodoCard';
import { Droppable } from 'react-beautiful-dnd';
// import { Droppable } from 'react-beautiful-dnd';



interface Props{
    completedTodos:Todo[],
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos,setTodos,completedTodos, setCompletedTodos}) => {
    return (
        <div className="container">
         <Droppable droppableId="List">
            {(provided ,snapshot)=>(
            <div className={`TodoList ${snapshot.isDraggingOver ? "dargActive":""}`} ref={provided.innerRef} {...provided.droppableProps}>
               <span className='todo_heading'>Active Todos</span>
               {todos.map((todo,index)=>(<TodoCard index={index} todos={todos } setTodos={setTodos} key={todo.id} todo={todo}/>))}
               {provided.placeholder}
            </div>
            )}
         </Droppable>

         <Droppable droppableId="RemoveTodos">
            {(provided,snapshot)=>(
           <div className={`TodoList remove ${snapshot.isDraggingOver ? "dragCompleted": ""}`} ref={provided.innerRef} {...provided.droppableProps}>
               <span className='todo_heading'>Completed Todos</span>
               {completedTodos.map((todo,index)=>(<TodoCard index={index} todos={completedTodos } setTodos={setCompletedTodos} key={todo.id} todo={todo}/>))}
               {provided.placeholder}
            </div>
            )}
         </Droppable>
        </div>
    );
};

export default TodoList;