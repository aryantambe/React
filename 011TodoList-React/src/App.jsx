import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  {
    /*Using localStorage */
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
  <>
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div
        className="bg-cover bg-center min-h-screen py-8"
        style={{
          backgroundImage:/* some cute cat pics - https://images.pexels.com/photos/10954832/pexels-photo-10954832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260       https://images.pexels.com/photos/4701546/pexels-photo-4701546.jpeg?_gl=1*16pu4sd*_ga*MTMwNzI0NDMzNC4xNzUwOTM5NTM4*_ga_8JE65Q40S6*czE3NTE3Mzg5NTckbzIkZzEkdDE3NTE3MzkxODMkajI2JGwwJGgw*/ 
             "url('/mimi1.jpg')",
        }}
      >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-black/60 backdrop-blur-md">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            What's on your mind Divya? ❤️
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          {todos.map((todo) => (
            <div className="w-full" key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  </>
);

}

export default App;
