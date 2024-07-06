import React, { useEffect, useRef, useState } from "react";
import todo_pic from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodos = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodos = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-9" src={todo_pic} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className=" bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Todos here"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-violet-600 w-32 h-14 text-white text-lg font-medium cursor-pointer  hover:bg-violet-800 active:bg-violet-500 "
        >
          ADD
        </button>
      </div>

      <div>
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodos={deleteTodos}
              toggleTodos={toggleTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
