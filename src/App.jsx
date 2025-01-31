import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [toDos, setToDos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className="app">
      <Header />
      <InputField toDos={toDos} setToDos={setToDos} />
      <TodoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;