import React, { useEffect, useRef } from "react";
import "./Suggestions.css";
import { useDispatch, useSelector } from "react-redux";
import { updateRecentSearch, setFocus } from "../../Store";

const Suggestions = () => {
  const filterArray = useSelector((state) => state.filterArray);
  const recentArray = useSelector((state) => state.recentSearch);
  const focus = useSelector((state) => state.focus);
  const dispatch = useDispatch();

  useEffect(() => {}, [focus, recentArray]);


    const handleSelect = (suggestion) => {
      const temp = [...recentArray];
      const index = temp.findIndex((item) => item.id === suggestion.id);
      if (index === -1) {
        temp.unshift(suggestion);
      } else {
        temp.splice(index, 1);
        temp.unshift(suggestion);
      }

    if (temp.length > 3) {
      temp.splice(temp.length - 1, 1);
    }

    dispatch(updateRecentSearch(temp));
    dispatch(setFocus(false));
  };

  const handleBlur = () => {
    dispatch(setFocus(false));
  };

  return focus ? (
    <div className="suggestions" onBlur={handleBlur} tabIndex="0">
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
  ) : (
    <></>
  );
};

export default Suggestions;
