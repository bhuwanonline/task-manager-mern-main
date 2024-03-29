import React from "react";
import Button from "./generic/components/Button/Button";
import classNames from "classnames";

function TaskItem(props) {
  const {
    _id,
    title,
    description,
    deleteTask,
    completeTask,
    completedStatus,
  } = props;

  const titleClass = classNames({
    "task-item": true,
    "task-item-strike": completedStatus,
  });

  const descriptionClass = classNames({
    "task-item": true,
    "task-item-strike": completedStatus,
  });

  const actionClass = classNames({
    "task-item": true,
  });

  return (
    <div className="task-manager-app__task-item">
      <div className={titleClass}>{title}</div>
      <div className={descriptionClass}>{description}</div>
      <div className={actionClass}>
        <Button
          onClick={() => deleteTask(_id)}
          label="Delete"
          disabled={false}
        />
        {!completedStatus && (
          <Button
            onClick={() => completeTask(_id)}
            label="Complete"
            disabled={false}
          />
        )}
      </div>
    </div>
  );
}

export default TaskItem;
