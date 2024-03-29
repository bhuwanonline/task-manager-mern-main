import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { sortByCompletedStatus } from "./utils/sortByCompletedStatus";
import "./App.css";

const API_ENDPOINT = "http://localhost:5001/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    axios
      .get(API_ENDPOINT)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  };

  const addTask = (requestParameters: object) => {
    axios
      .post(API_ENDPOINT, { ...requestParameters })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const completeTask = (taskId) => {
    axios
      .put(`${API_ENDPOINT}/${taskId}`, {
        completedStatus: true,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`${API_ENDPOINT}/${taskId}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="task-manager-app">
      <div className="task-manager-app__title">
        <h1>Task Manager</h1>
      </div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={sortByCompletedStatus(tasks)}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
};

export default App;
