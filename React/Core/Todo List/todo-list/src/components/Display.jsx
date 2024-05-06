import React from "react";

const Display = (props) => {
    const { taskList, deleteTask, handleChange } = props;

   // console.log(taskList);

    return (
    <div>
        {taskList.map((item, index) => (
        <div key={item.id}>
            <label
            style={{ textDecoration: item.isComplete ? "line-through" : null }}>
            {item.taskContent}
            </label>
            <input
            type="checkbox"
            // checked={item.isComplete}
            value={item.taskContent}
            onChange={() => handleChange(item)}
            />
            <button
                style={{
                backgroundColor: "#000000",
                color: "white",
                fontSize: "1.2em",
                width: "80px",
                height: "50px",
                marginTop: "10px",
                borderRadius: "5px",
                border: "none",
                }}
                onClick={() => {
                deleteTask(item.id);
                console.log(item.id);
                }}>
                Delete
            </button>
            </div>
        ))}
        </div>
    );
};

export default Display;
