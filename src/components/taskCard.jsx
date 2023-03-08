import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask, completedTask } = useContext(TaskContext);
  return (
    <div
      className={`bg-card-fondo text-white p-4 rounded-md ${
        task.completed ? "bg-green-500" : ""
      }`}
    >
      <h1 className="text-xl font-bold capitalize text-center">{task.title}</h1>
      <p className="text-center">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 mx-auto flex"
        onClick={() => deleteTask(task.id)}
      >
        Borrar Tarea
      </button>
      <button
        className={`bg-green-500 px-2 py-1 rounded-md mt-4 mx-auto flex ${
          task.completed ? "bg-black" : ""
        }`}
        onClick={() => completedTask(task.id)}
      >
        Completada
      </button>
    </div>
  );
}

export { TaskCard };
