"use client";
import App from "next/app";
import Todo from "./components/todo"
import React, { useState, useEffect } from 'react';

function generateTodo(task) {
  return <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
}

export default function Home() {

  function changeName() {
    let getNameForm = document.getElementById("nameInput");

    if (getNameForm != null) {
      let isNameEditHidden = (getNameForm as HTMLInputElement).hidden;
      if (isNameEditHidden) {
        (getNameForm as HTMLInputElement).hidden = false;
      }
      else {
        (getNameForm as HTMLInputElement).hidden = true;
      }

      setShowBtn(!showBtn);

      let newName = (getNameForm as HTMLInputElement).value;
      if (/\S/.test(newName)) {
        setFirstName(newName);
      }
      else{
        setFirstName(firstName);
      }
    }
  }


  var today = new Date();
  const [firstName, setFirstName] = useState('user');
  const [showBtn, setShowBtn] = useState(true)

  const DATA = [
    { id: "todo-0", name: "Fill out document", completed: true },
    { id: "todo-1", name: "Meeting with Dax", completed: false },
    { id: "todo-2", name: "Take out trash", completed: false },
    { id: "todo-3", name: "Homework", completed: false },
  ];

  const taskList = DATA?.map((task) => (
    generateTodo(task)
  ));

  return (
    <main className="items-center justify-between px-44 pt-16">
      <h1 className="text-5xl mb-2">TO DO</h1>
      <p className="text-xl">{today.toDateString().toLowerCase()}</p>
      <div className="grid grid-cols-10 gap-4 mt-5">
        <div className="col-span-3 border-2 p-10 grid-item">
          <p>welcome back</p>
          <div className="flex">
            <p>{firstName}</p>
            {showBtn &&
              <button onClick={() => changeName()}><img src="../icons/pencil.png" alt="Edit name" className="btn_editName ml-3 w-4 inline-block" /></button>
            }
          </div>
          <div className="flex">
            <input hidden type="text" id="nameInput" pattern = ".*\S.*" defaultValue={firstName} maxLength={25} className="border-2 border-green-900"></input>
            {!showBtn &&
              <button onClick={() => changeName()}><img src="../icons/check.png" alt="Save name" className="w-5 inline-block btn_saveName ml-3" /></button>
            }
          </div>
        </div>
        <div className="col-span-7">
          <ul className="space-y-4"
            role="list">
            {taskList}
          </ul>
        </div>
      </div>
    </main >
  );
}
