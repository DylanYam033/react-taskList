import { TaskList } from "./components/taskList";
import { FormTask } from "./components/formTask";

function App() {
  return (
    <main className="bg-mi-fondo h-screen">
      <div className="container mx-auto p-10">
        <FormTask />
        <TaskList />
      </div>
    </main>
  );
}

export { App };
