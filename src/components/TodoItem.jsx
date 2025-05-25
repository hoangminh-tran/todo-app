import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../Context/AppProvider";

const TodoItem = ({ id, name, isImportant, isCompleted }) => {
  const { handleClickCheckboxChange, handleTodoItemClick } =
    useContext(AppContext);

  return (
    <div className="todo-item" onClick={() => handleTodoItemClick(id)}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleClickCheckboxChange(id)}
          onClick={(e) => e.stopPropagation()}
        />
        <p className="todo-item-text">{name}</p>
      </div>
      {isImportant && <p>⭐</p>}
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  isImportant: PropTypes.bool,
  isCompleted: PropTypes.bool,
};

export default TodoItem;
