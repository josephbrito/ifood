import { createContext, useState, useContext } from "react";
import { IChildren } from "./types";

const DoneContext = createContext<{
  isDone: boolean;
  setIsDone: (s: boolean) => void;
}>({ isDone: false, setIsDone: () => {} });

export function DoneProvider({ children }: IChildren) {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <DoneContext.Provider value={{ isDone, setIsDone }}>
      {children}
    </DoneContext.Provider>
  );
}

export function useDone() {
  const { isDone, setIsDone } = useContext(DoneContext);

  return { isDone, setIsDone };
}
