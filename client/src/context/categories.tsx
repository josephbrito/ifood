import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services";
import {
  CATEGORIES_DEFAULT_VALUE,
  ICategories,
  ICategoriesData,
  IChildren,
} from "./types";

const CategorieContext = createContext<ICategoriesData>(
  CATEGORIES_DEFAULT_VALUE
);

export function CategorieProvider({ children }: IChildren) {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await api.get("categorias");
        const data: ICategories[] = req.data;

        setCategories(data);
      } catch (error: any) {
        alert(error.response.data);
        return;
      }
    };

    fetchData();
  }, []);

  return (
    <CategorieContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategorieContext.Provider>
  );
}

export function useCategories() {
  const { categories, setCategories } = useContext(CategorieContext);

  return { categories, setCategories };
}
