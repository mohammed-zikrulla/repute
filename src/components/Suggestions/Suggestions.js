import React from "react";
import "./Suggestions.css";
import { useDispatch, useSelector } from "react-redux";
import { updateRecentSearch } from "../../Store";

const Suggestions = () => {
  const filterArray = useSelector((state) => state.filterArray);
  const recentArray = useSelector((state) => state.recentSearch);
  const dispatch = useDispatch();

  console.log(recentArray);
  const handleSelect = (suggestion) => {
    const temp = [...recentArray];
    if (temp.every((item) => item.id !== suggestion.id)) {
      temp.unshift(suggestion);
      if (temp.length > 3) {
        temp.splice(temp.length - 1, 1);
      }
      localStorage.setItem("recentSearch", JSON.stringify(temp));
      dispatch(updateRecentSearch(temp));
    }
  };
  return (
    <div className="suggestions">
      {filterArray &&
        filterArray.length > 0 &&
        filterArray.map((suggestion) => {
          return (
            <button
              onClick={() => handleSelect(suggestion)}
              className="suggestions-table"
              key={suggestion.original_title}
            >
              {suggestion.original_title}
            </button>
          );
        })}
    </div>
  );
};

export default Suggestions;
