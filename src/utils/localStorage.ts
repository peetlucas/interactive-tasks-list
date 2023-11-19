import { Task } from "../redux/taskSlice";
// Function to save tasks to localStorage
export const saveTasksToLocalStorage = (tasks: Task[]) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedTasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};
