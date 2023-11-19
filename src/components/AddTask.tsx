// AddTask.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { ITask } from '../../types';
import { Transition } from 'react-transition-group';
import { saveTasksToLocalStorage } from '../utils/localStorage';

const AddTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [showForm, setShowForm] = useState(true);
  const dispatch = useDispatch();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      const newTask: ITask = {
        id: Date.now().toString(),
        title: taskTitle,
        description: taskDescription,
        isComplete: false,
      };
      dispatch(addTask(newTask));
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  useEffect(() => {
    // Triggering a reflow to ensure the transition is applied during initial display
    setShowForm(false);
    setTimeout(() => setShowForm(true), 200);
  }, []);

  return (
    <Transition in={showForm} timeout={500} unmountOnExit>
      {(state) => (
        <div
          className={`transition-opacity ${
            state === 'exiting' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <form onSubmit={handleSubmit} className="flex mb-4 justify-between">
            <span className="w-full">
              <div className="mb-0">
                <input
                  type="text"
                  placeholder="Add Task"
                  value={taskTitle}
                  onChange={handleTitleChange}
                  className="flex-1 py-2 px-4 w-full bg-slate-800 border border-white rounded-l-md"
                />
              </div>
              <div className="mt-2">
                <textarea
                  className="flex-1 py-2 px-4 text-sm w-full bg-slate-800 border border-white rounded-l-md block min-h-[auto]"
                  placeholder="Description..."
                  value={taskDescription}
                  onChange={handleDescriptionChange}
                ></textarea>
              </div>
            </span>
            <button
              type="submit"
              className="bg-purple-400 hover:bg-purple-300 text-white px-4 rounded-r-md ml-2"
            >
              Add Task
            </button>
          </form>
        </div>
      )}
    </Transition>
  );
};

export default AddTask;
