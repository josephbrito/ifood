import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { IMenu, IMenuData, MENU_DEFAULT_VALUE, IChildren } from "./types";

const MenuContext = createContext<IMenuData>(MENU_DEFAULT_VALUE);

export function MenuProvider({ children }: IChildren) {
  const [menu, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await api.get("produtos");
        const data: IMenu[] = req.data;

        const newData = data.filter((product) => product.categoria_id === 1);

        setMenu(newData);
        return;
      } catch (error: any) {
        alert(error.response.data);
        return;
      }
    };

    fetchData();
  }, []);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const { menu, setMenu } = useContext(MenuContext);

  return { menu, setMenu };
}
