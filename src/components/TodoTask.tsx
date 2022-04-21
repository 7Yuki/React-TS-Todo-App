import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>Task: {task.taskToDo}</span>
        <span> Due in: {task.deadline} days</span>
      </div>
      <button onClick={() => {completeTask(task.taskToDo)}}>X</button>
    </div>
  );
};

export default TodoTask;
