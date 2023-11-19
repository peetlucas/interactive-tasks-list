import { ChangeEvent, FormEvent } from "react";

export interface HeaderProps {
  title?: string;
  onAdd: () => void;
  showAdd: boolean;
}

export interface ButtonProps {
  color?: string;
  text: string;
  onClick: () => void;
}

export interface ITask { 
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
}

export interface ITaskProps {  
  task: ITask;
  handleToggleTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export interface IAddTaskProps {
  task: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent) => void;
}