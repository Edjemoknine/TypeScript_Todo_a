import { type } from "os";
import React, { useRef } from "react";
import { Interface } from "readline";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=> void
}

const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  const inputRef= useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input ref={inputRef} value={todo} onChange={(e)=> setTodo(e.target.value)} type="text" placeholder="Enter task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default InputField;
