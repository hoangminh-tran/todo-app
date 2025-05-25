import { useContext, useMemo } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import { CATEGORY_ITEM } from "./constants";
import { AppContext } from "./Context/AppProvider";

function App() {
  const {
    todoList,
    setTodoList,
    searchText,
    selectedCategoryId,
    selectedFilterId,
    inputRef,
    showSideBar,
  } = useContext(AppContext);

  const filterTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (!todo.name.includes(searchText) && searchText != "") {
        return false;
      }

      if (selectedCategoryId !== undefined) {
        const category = CATEGORY_ITEM.find((category) => {
          return category.name === todo.categoryName;
        });

        if (selectedCategoryId !== category.id) return false;
      }

      switch (selectedFilterId) {
        case "all":
          return true;
        case "important":
          return todo.isImportant;
        case "completed":
          return todo.isCompleted;
        case "deleted":
          return todo.isDeleted;
        default:
          return true;
      }
    });
  }, [selectedFilterId, todoList, searchText, selectedCategoryId]);

  return (
    <div className="container">
      <FilterPanel />
      <div className="main-content">
        <input
          ref={inputRef}
          type="text"
          name="add-new-task"
          placeholder="Add new task"
          className="task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = e.target.value;
              setTodoList([
                ...todoList,
                {
                  id: crypto.randomUUID(),
                  name: value,
                  isCompleted: false,
                  isImportant: false,
                  isDeleted: false,
                  categoryName: "Personal",
                },
              ]);
              inputRef.current.value = "";
            }
          }}
        />
        <div>
          {filterTodos.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                key={todo.id}
                name={todo.name}
                isImportant={todo.isImportant}
                isCompleted={todo.isCompleted}
              />
            );
          })}
        </div>
        {showSideBar && <Sidebar />}
      </div>
    </div>
  );
}

export default App;
