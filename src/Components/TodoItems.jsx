import React from "react";
import check_icon from "../assets/check.svg";
import uncheck_icon from "../assets/uncheck.svg";
import delete_icon from "../assets/delete.svg";

const TodoItems = ({ text, id, isComplete, deleteTodos, toggleTodos }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggleTodos(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? check_icon : uncheck_icon} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodos(id);
        }}
        src={delete_icon}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
