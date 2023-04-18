import React, { ChangeEvent } from "react";

import {
  Container,
  Header,
  SearchBox,
  Input,
  IconBox,
  Section,
  Footer,
  Pages,
  PageBox,
  ButtonNav,
  CardContainer,
  Profile,
  Cart,
} from "./styles";
import { BsCartCheckFill, BsSearch } from "react-icons/bs";
import NavBar from "../NavBar";
import Card from "../Card";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import Jose from "../../assets/josebrito.jpeg";

import { useMenu } from "../../context/menu";
import { useCurrent } from "../../context/category";
import { useOpen } from "../../context/open";

import { api } from "../../services";
import { IMenu } from "../../context/types";

const Menu: React.FC = () => {
  const { menu, setMenu } = useMenu();
  const { currentCategory } = useCurrent();
  const { isMenuOpen, setIsMenuOpen } = useOpen();

  const handleSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      const req = await api.get("produtos");
      const data: IMenu[] = req.data;

      const newData = data.filter(
        (obj) => obj.categoria_id === currentCategory
      );

      setMenu(newData);
      return;
    }
    const req = await api.get("produtos");
    const data: IMenu[] = req.data;
    const newData = data.filter(
      (el) =>
        el.nome.startsWith(e.target.value) ||
        el.nome.startsWith(e.target.value[0].toUpperCase())
    );
    setMenu(newData);
  };

  return (
    <Container style={isMenuOpen ? { display: "none" } : { display: "block" }}>
      <Header>
        <Cart onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BsCartCheckFill />
        </Cart>
        <SearchBox>
          <Input placeholder="Pesquisar..." onChange={handleSearchInput} />
          <IconBox>
            <BsSearch />
          </IconBox>
        </SearchBox>
      </Header>
      <Section>
        <NavBar />
        <CardContainer>
          {menu.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              url={product.url}
              caption={product.descricao}
              name={product.nome}
              price={product.preco}
            />
          ))}
        </CardContainer>

        <Pages>
          <span>Página</span>
          <PageBox>
            <span>1</span>
          </PageBox>
          <span>de 3</span>

          <ButtonNav>
            <MdNavigateBefore className="icon" />
            <MdNavigateNext className="icon" />
          </ButtonNav>
        </Pages>
      </Section>
      <Footer>
        <Profile>
          <img src={Jose} />
          <span>
            <a href="https://github.com/josephbrito" target="_blank">
              José de Brito
            </a>
          </span>
        </Profile>
      </Footer>
    </Container>
  );
};

export default Menu;
