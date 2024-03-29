import React from "react";
import Button from "./generic/components/Button/Button";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { tasks, deleteTask, completeTask } = props;
  return (
    <div className="task-manager-app__tasks">
      <div className="task-manager-app__task-item">
        <div className="task-item">Title</div>
        <div className="task-item">Description</div>
        <div className="task-item">Action</div>
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          {...task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
