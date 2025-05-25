import PropTypes from "prop-types";
import React, { useContext } from "react";
import { FILTER_ITEM } from "../constants";
import { AppContext } from "../Context/AppProvider";

const FilterList = ({ countByFilterType }) => {
  const { selectedFilterId, setSelectedFilterId } = useContext(AppContext);
  return (
    <div className="filter-container">
      {FILTER_ITEM.map((filterItem) => {
        return (
          <div
            key={filterItem.id}
            className={`filter-item ${
              filterItem.id === selectedFilterId ? "selected" : ""
            }`}
            onClick={() => setSelectedFilterId(filterItem.id)}
          >
            <div className="filter-name">
              <img src={filterItem.iconPath} />
              <p>{filterItem.label}</p>
            </div>
            <p>{countByFilterType[filterItem.id]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterList;
