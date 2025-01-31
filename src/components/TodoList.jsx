import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ toDos, setToDos }) {
  return (
    <div className="todos">
      {toDos.map((obj) => (
        <TodoItem key={obj.id} obj={obj} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
}

export default TodoList;
