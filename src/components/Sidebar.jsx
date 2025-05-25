import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { CATEGORY_ITEM } from "../constants";
import { AppContext } from "../Context/AppProvider";

const Sidebar = () => {
  const { selectedTodo, setShowSideBar, handleSaveTodoItem } =
    useContext(AppContext);
  const [name, setName] = useState(selectedTodo.name);
  const [isImportant, setIsImportant] = useState(selectedTodo.isImportant);
  const [isCompleted, setIsCompleted] = useState(selectedTodo.isCompleted);
  const [isDeleted, setIsDeleted] = useState(selectedTodo.isDeleted);
  const [categoryName, setCategoryName] = useState(selectedTodo.categoryName);

  const handleSave = () => {
    const newTodo = {
      ...selectedTodo,
      name,
      isImportant,
      isCompleted,
      isDeleted,
      categoryName,
    };
    handleSaveTodoItem(newTodo);
    setShowSideBar(false);
  };

  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo Name</label>
          <input
            id="sb-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is Important ?</label>
          <input
            id="sb-important"
            name="important"
            type="checkbox"
            checked={isImportant}
            onChange={() => setIsImportant(!isImportant)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is Completed ?</label>
          <input
            id="sb-completed"
            name="completed"
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-deleted">Is Deleted ?</label>
          <input
            id="sb-deleted"
            name="deleted"
            type="checkbox"
            checked={isDeleted}
            onChange={() => setIsDeleted(!isDeleted)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category</label>
          <select
            id="sb-category"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          >
            {CATEGORY_ITEM.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setShowSideBar(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Sidebar;
