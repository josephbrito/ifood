import React from "react";

import { Container, Li, Ul } from "./styles";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import { useCategories } from "../../context/categories";
import { useMenu } from "../../context/menu";
import { api } from "../../services";
import { IMenu } from "../../context/types";
import { useCurrent } from "../../context/category";

const NavBar: React.FC = () => {
  const { menu, setMenu } = useMenu();
  const { categories } = useCategories();
  const { currentCategory, setCurrentCategory } = useCurrent();

  const fetchData = async (id: number) => {
    try {
      const req = await api.get("produtos");
      const data: IMenu[] = req.data;

      const newData = data.filter((obj) => obj.categoria_id == id);

      setCurrentCategory(id);
      setMenu(newData);
      return menu;
    } catch (error: any) {
      alert(error.response.data);
      return;
    }
  };

  return (
    <Container>
      <MdNavigateBefore className="icon previous" />
      <MdNavigateNext className="icon next" />
      <Ul>
        {categories.map((c) => (
          <Li
            key={c.id}
            onClick={() => {
              fetchData(c.id);
            }}
          >
            {c.nome}
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default NavBar;
