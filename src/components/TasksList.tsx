"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTask,
  setTasks,
  deleteTask,
} from "../redux/taskSlice";
import AddTask from "./AddTask";
import Header from '../components/Header';
import Task from "../components/Task";
import { ITaskProps } from "../../types";

const TasksList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const [showAddTask, setShowAddTask] = useState(false);

  const dispatch = useDispatch();

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    const data = localStorage.getItem("tasks");

    try {      
      const tasks = data ? JSON.parse(data) : [];
      console.log(data);
      if (tasks && tasks.length > 0) {
      dispatch(setTasks(tasks));
    }
    } catch (err) {
      console.log('Error: ', err);
    }    
  }, [dispatch]);

  return (
    <>
       <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />         
        <div className="mt-3">
          {showAddTask && <AddTask />}
        </div>
        <ul className="space-y-2">
          {tasks === undefined || tasks.length === 0 ? (
            <p className="text-gray-500 flex items-center">No tasks!</p>
          ) : (
            tasks.map((task) => (<Task task={task} handleDeleteTask={handleDeleteTask} 
            handleToggleTask={handleToggleTask}/> )))}
        </ul>
    </>
  );
};

export default TasksList;
