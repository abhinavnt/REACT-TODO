import React, { useState } from "react";

function TodoItem({ obj, toDos, setToDos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(obj.text);

  const toggleStatus = (e) => {
    setToDos(
      toDos.map((item) => {
        if (item.id === obj.id) {
          item.status = e.target.checked;
        }
        return item;
      })
    );
  };

  const deleteTask = () => {
    setToDos(toDos.filter((item) => item.id !== obj.id));
  };

  const saveEdit = () => {
    if (!editedText.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    if (
      toDos.some(
        (item) =>
          item.text.toLowerCase() === editedText.toLowerCase() &&
          item.id !== obj.id
      )
    ) {
      alert("Task already exists!");
      return;
    }
    setToDos(
      toDos.map((item) => {
        if (item.id === obj.id) {
          item.text = editedText;
        }
        return item;
      })
    );
    setIsEditing(false)
  }

  return (
    <div className="todo">
      <div className="left">
        <input
          type="checkbox"
          checked={obj.status}
          onChange={toggleStatus}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <p className={obj.status ? "completed" : ""}>{obj.text}</p>
        )}
      </div>
      <div className="right">
        {isEditing ? (
          <i className="fas fa-check" onClick={saveEdit}></i>
        ) : (
          <i className="fas fa-edit" onClick={() => setIsEditing(true)}></i>
        )}
        <i className="fas fa-times" onClick={deleteTask}></i>
      </div>
    </div>
  );
}

export default TodoItem;
