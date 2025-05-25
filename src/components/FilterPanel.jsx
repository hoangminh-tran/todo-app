import React, { useContext, useMemo } from "react";
import "./FilterPanel.css";
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";
import { AppContext } from "../Context/AppProvider";

const FilterPanel = () => {
  const { todoList, searchText, setSearchText } = useContext(AppContext);
  const countByFilterType = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        let newAcc = { ...acc };
        if (cur.isImportant) {
          newAcc = {
            ...newAcc,
            important: newAcc.important + 1,
          };
        }
        if (cur.isCompleted) {
          newAcc = {
            ...newAcc,
            completed: newAcc.completed + 1,
          };
        }
        if (cur.isDeleted) {
          newAcc = {
            ...newAcc,
            deleted: newAcc.deleted + 1,
          };
        }
        return newAcc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  return (
    <div className="filter-panel">
      <input
        name="search-text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <FilterList countByFilterType={countByFilterType} />
      <CategoryList />
    </div>
  );
};

export default FilterPanel;
