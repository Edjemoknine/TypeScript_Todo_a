import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const  App: React.FC =()=> {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id:Date.now(),title:todo, completed:false}])
      setTodo('')
    }
  }

  const DragTodo=(result:DropResult)=>{
    const {source,destination}=result
  
    if(!destination) return;
    if(source===destination && source.index === destination.index) return ;

    let add, 
    active=todos,
    completed=completedTodos;

// Remove from source 
    if(source.droppableId==='List'){
      add= active[source.index]
      active.splice(source.index,1)
    }else{
      add= completed[source.index]
      completed.splice(source.index,1)
    }
// Add to destination
    if(destination.droppableId==='List'){
      active.splice(destination.index,0,add)
    }else{
      completed.splice(source.index,0,add)
    }
    setCompletedTodos(completed)
    setTodos(active)

  }
  return (
  <DragDropContext onDragEnd={DragTodo}>
      <div className="App">
      <h1>Tskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} todos={todos} setTodos={setTodos}/>
    </div>
  </DragDropContext>
  );
}

export default App;
