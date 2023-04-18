import { createContext, useState, useContext } from "react";
import { IChildren } from "./types";

const TotalContext = createContext<{
  total: number;
  setTotal: (n: number) => void;
}>({ total: 0, setTotal: () => {} });

export function TotalProvider({ children }: IChildren) {
  const [total, setTotal] = useState<number>(0);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
}

export function useTotal() {
  const { total, setTotal } = useContext(TotalContext);

  return { total, setTotal };
}
