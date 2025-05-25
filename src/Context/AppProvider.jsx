import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import { TODO_LIST } from "../constants";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(TODO_LIST);

  const inputRef = useRef(null);

  const [showSideBar, setShowSideBar] = useState(false);

  const [selectedTodoId, setSelectedTodoId] = useState();

  const selectedTodo = todoList.find((todo) => todo.id === selectedTodoId);

  const [selectedFilterId, setSelectedFilterId] = useState("all");

  const [searchText, setSearchText] = useState("");

  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const handleClickCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodoList(newTodoList);
  };

  const handleSaveTodoItem = (newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });

    setTodoList(newTodoList);
  };

  const handleTodoItemClick = (todoId) => {
    setShowSideBar(true);
    setSelectedTodoId(todoId);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCategoryId,
        setSelectedCategoryId,
        todoList,
        setTodoList,
        inputRef,
        showSideBar,
        setShowSideBar,
        selectedTodoId,
        setSelectedTodoId,
        selectedTodo,
        selectedFilterId,
        setSelectedFilterId,
        searchText,
        setSearchText,
        handleClickCheckboxChange,
        handleTodoItemClick,
        handleSaveTodoItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
