import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt, FaCheck, FaTimes } from "react-icons/fa";

const NewTask = (props) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updatetask, setupdatetask] = useState("");
  // const [renderedTask, setrenderedTask] = useState(0)
  // const classCheckTrue =

  const handleUpdate = (id) => {
    const aux = [...props.tasklist].filter((task) => task.id === id);
    aux[0].text = updatetask;
    console.log(aux[0]);
    props.settaskList([...props.tasklist]);
    setupdatetask("");
  };

  return (
    <>
      <div
        className={
          "m-auto flex max-w-lg max-h-lg justify-between rounded font-mono text-white py-2 my-5 px-10 " +
          (checked ? "bg-slate-900" : "bg-red-700")
        }
      >
        {!edit ? (
          <>
            <input
              type="checkbox"
              className="mx-2 my-2"
              onChange={() => {
                setChecked(!checked);
              }}
            />

            <h2 className={checked ? "line-through" : "none"}>
              {props.children}
            </h2>

            <div className="">
              <button
                className="mx-2 px-3 py-2 rounded bg-white hover:bg-yellow-500 hover:text-white text-yellow-500"
                type="button"
                aria-label="edit"
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                <BiEdit className="hover:scale-150" />
              </button>

              <button
                className="px-3 py-2 rounded bg-white hover:bg-red-900 hover:text-white text-red-700"
                type="button"
                aria-label="delete"
                onClick={() => {
                  props.handleDelete(props.id);
                }}
              >
                <FaRegTrashAlt className="hover:scale-150" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex ">
            <input
              className={`bg-white rounded-lg mx-3 px-6 py-3 placeholder:text-green-500 font-bold text-green-500`}
              aria-label="edittask"
              value={updatetask}
              onChange={(event) => setupdatetask(event.target.value)}
            />

            <button
              className="ml-10 mr-3 px-3 py-2 rounded bg-white hover:bg-green-500 hover:text-white text-green-500"
              type="button"
              aria-label="check"
              onClick={() => {
                handleUpdate(props.id);
                setEdit(!edit);
              }}
            >
              <FaCheck className="hover:scale-150" />
            </button>
            {/* </form> */}
            <button
              className="px-3 py-2 rounded bg-white hover:bg-red-500 hover:text-white text-red-500"
              type="button"
              aria-label="cancel"
              onClick={() => {
                setEdit(!edit);
                // props.handleUpdate(props.id)
              }}
            >
              <FaTimes className="hover:scale-150" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewTask;
