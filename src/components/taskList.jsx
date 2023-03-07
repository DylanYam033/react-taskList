import { TaskCard } from "./taskCard";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay Tareas Pendientes</h1>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </div>
    );
  }
}
export { TaskList };
