import React, { useState } from "react";
import Task from "./components/Task";
import Display from "./components/Display";

function App() {
  const [taskList, setTaskList] = useState([]);

  //add task
  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
    console.log(taskList);
  };

  //delete task
  const deleteTask = (taskId) => {
    const filteredTasksList = taskList.filter((item) => {
      return item.id !== taskId;
    });
    console.log(filteredTasksList);
    setTaskList(filteredTasksList);
  };

  const handleChange = (item) => {
    // in that line the item will get a true value but there will be no changes appeared in the display.
    // item.isComplete = !item.isComplete ;
    let updatedList = taskList.map((todotask) => {
      if (todotask === item) {
        let updatedTodo = { ...item, isComplete: !item.isComplete };
        return updatedTodo;
      } else {
        return todotask;
      }
    });

    setTaskList(updatedList);
    console.log(updatedList);
  };
  return (
    <fieldset 
          style={{ 
            textAlign: "center",
            border:"2px solid #0019f8",
            width:"400px",
            marginLeft:"400px"}}>
      <legend style={{fontSize:"1.8rem", color:"#0019f8"}}>TODO-LIST</legend>
      <Task addTask={addTask} />
      <Display
        taskList={taskList}
        deleteTask={deleteTask}
        handleChange={handleChange}
      />
    </fieldset>
    
  );
}

export default App;
