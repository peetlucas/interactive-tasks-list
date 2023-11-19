import { ITaskProps } from '../../types'
const Task: React.FC<ITaskProps> = ({ task, handleDeleteTask, handleToggleTask }) => {
  return (
        <li
        key={task.id}
        className={`flex items-center justify-between px-4 py-2 ${
            task.isComplete ? "bg-green-600" : "bg-slate-700"
        } rounded-md `}
        >
        <span 
            className={`cursor-pointer ${
            task.isComplete ? "line-through" : ""
            } w-3/4`}
            onClick={() => handleToggleTask(task.id)}
        >
            <h2>
            {task.title}
            </h2>
            <p className={`italic text-sm`}>
            {task.description}
            </p>
        </span>
        <span className={`w-max`}>
            <input
                type="checkbox"   
                className="ml-2"             
                onChange={() => handleToggleTask(task.id)}
                checked={task.isComplete}
            />
            <button
                className="ml-2  text-red-600 hover:text-red-700 focus:outline-none"
                onClick={() => handleDeleteTask(task.id)}
            >
                Delete
            </button>
        </span>
        </li>
           
  )
}

export default Task
