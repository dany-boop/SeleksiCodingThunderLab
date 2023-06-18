import React, { useState } from "react";
import NewTask from "./NewTask";
import { FaPlus } from "react-icons/fa";

const Atask = () => {
  const [taskList, settaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleDelete = (id) => {
    settaskList([...taskList].filter((task) => task.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task !== "") {
      const newtask = {
        id: new Date().getTime(),
        text: task,
        completed: false,
      };
      settaskList([...taskList, newtask]);
    }

    setTask("");
  };

  const list = taskList.map((task) => {
    return (
      <NewTask
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        tasklist={taskList}
        settaskList={settaskList}
        key={task.id}
        id={task.id}
      >
        {task.text}
      </NewTask>
    );
  });

  return (
    <div>
      {/* task form  */}
      <div className="flex justify-center my-2">
        <form onSubmit={handleSubmit}>
          <input
            className={`rounded-lg px-4 mx-3 md:px-6 py-3 mt-10 font-mono placeholder:font-mono placeholder:text-gray-300 font-bold text-black`}
            type="text"
            name="new-task"
            value={task}
            placeholder="add a task..."
            onChange={(event) => setTask(event.target.value)}
          />
          <button className="mt-5 px-28 md:px-3 py-2  rounded bg-emerald-500 hover:bg-green-400 text-white">
            <FaPlus className="items-center justify-center hover:scale-150" />
          </button>
        </form>
      </div>
      {/* list */}
      <div className="flex-col">{list}</div>
    </div>
  );
};
export default Atask;
