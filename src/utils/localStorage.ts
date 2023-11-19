import { ITask } from "../../types";
// Function to save tasks to localStorage
export const saveTasksToLocalStorage = (tasks: ITask[]) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedTasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};
