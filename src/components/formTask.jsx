import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const subtmit = (event) => {
    event.preventDefault(); //evitar recargar la pagina
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold  text-white mb-3 text-center">Crear nueva Tarea</h1>
      <form onSubmit={subtmit} className="bg-fondo-form p-10 mb-4 rounded-md">
        <input
          type="text"
          placeholder="Escribe una tarea"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          className="p-3 w-full mb-2 rounded-md"
        />

        <textarea
          placeholder="Ingresa la Descripcion de tu nueva tarea"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          className="p-3 w-full mb-2 rounded-md"
        />
        <button className="bg-indigo-700 px-3 py-1 text-white rounded-md mx-auto block">Guardar</button>
      </form>
    </div>
  );
}

export { FormTask };
