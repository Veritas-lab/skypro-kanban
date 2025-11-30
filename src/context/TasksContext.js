import { createContext } from "react";

export const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
  loading: false, // исправлено с "false" на false
  error: "",
});
