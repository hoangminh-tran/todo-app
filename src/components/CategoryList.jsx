import React, { useContext, useMemo } from "react";
import "./CategoryList.css";
import { CATEGORY_ITEM } from "../constants";
import { AppContext } from "../Context/AppProvider";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId, todoList } =
    useContext(AppContext);

  const countByCategoryName = useMemo(() => {
    return todoList.reduce(
      (acc, todo) => {
        return { ...acc, [todo.categoryName]: acc[todo.categoryName] + 1 };
      },
      {
        Personal: 0,
        Company: 0,
        Future: 0,
        Idea: 0,
      }
    );
  }, [todoList]);

  return (
    <div>
      <p>Categories</p>
      <div>
        {CATEGORY_ITEM.map((category) => {
          return (
            <div
              key={category.id}
              className={`category-item ${
                category.id === selectedCategoryId ? "selected" : ""
              }`}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <p className="category-name">{category.name}</p>
              <p>{countByCategoryName[category.name]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
