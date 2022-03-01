import React from "react";
import Task from "./Task"

function TaskList( {tasks, onDeleteTask} ) {
  const individualTasks = tasks.map((task) => (
    <Task 
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ))

  return (
    <div className="tasks">
      {individualTasks}
    </div>
  );
}

export default TaskList;
