import { createContext } from "react";
import { tasks as data } from "../data/data";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    //recibe un objeto desde formTask
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
        completed: false,
      },
    ]);
  }

  function deleteTask(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider };

//taskcontext contiene todas las funciones y estados de una manera global para que todos los componentes puedan acceder
//a estos sin tener que pasarlos por medio de props de uno en uno
