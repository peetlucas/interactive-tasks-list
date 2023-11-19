"use client";
import store from "./store";
import { Provider } from "react-redux";
import { saveTasksToLocalStorage } from "../utils/localStorage";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
