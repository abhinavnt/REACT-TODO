import React, { useState } from "react";

function InputField({ toDos, setToDos }) {
  const [toDo, setToDo] = useState("");

  const addTask = () => {
    if (!toDo.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    if (toDos.some((item) => item.text.toLowerCase() === toDo.toLowerCase())) {
      alert("Task already exists!");
      return;
    }
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };

  return (
    <div className="input">
      <input
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        placeholder="🖊️ Add item..."
      />
      <i className="fas fa-plus" onClick={addTask}></i>
    </div>
  );
}

export default InputField;
