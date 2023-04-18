import { createContext, useState, useContext } from "react";
import { IChildren } from "./types";

const CategoryContext = createContext<{
  currentCategory: number;
  setCurrentCategory: (c: number) => void;
}>({ currentCategory: 1, setCurrentCategory: () => {} });

export function CategoryProvider({ children }: IChildren) {
  const [currentCategory, setCurrentCategory] = useState<number>(1);

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCurrent() {
  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);

  return { currentCategory, setCurrentCategory };
}
