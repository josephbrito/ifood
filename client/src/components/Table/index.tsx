import React, { useEffect, useState } from "react";

import { Container, Content, Thead, Th, Tr, Td, Tbody, Button } from "./styles";

import { api } from "../../services";
import { ICart, IMenu, IRequests } from "../../context/types";

import { useTotal } from "../../context/total";

import { useRequests } from "../../context/requests";

import { BsPlus } from "react-icons/bs";
import { IoMdRemove } from "react-icons/io";
import { useCart } from "../../context/cart";

const Table: React.FC = () => {
  const { cart, setCart } = useCart();
  const { total, setTotal } = useTotal();

  useEffect(() => {
    const values: number[] = cart.length ? cart.map((obj) => obj.total) : [];

    const total_value = cart.length ? values.reduce((v, t) => v + t) : 0;
    setTotal(total_value);
  }, [cart]);

  if (!cart.length) {
    return <h2 style={{ textAlign: "center" }}>Nada no carrinho</h2>;
  }

  const handleClickIncrement = (id: number) => {
    const newCart: ICart[] = cart.map((obj) => {
      if (obj.id === id) {
        obj.quantidade += 1;
        obj.total = obj.valor * obj.quantidade;

        return obj;
      }
      return obj;
    });
    setCart(newCart);
  };

  const handleClickDecrement = (id: number) => {
    const objectToRemove: number[] = [];
    const newCart: ICart[] = cart.map((obj, index) => {
      if (obj.id === id) {
        obj.quantidade -= 1;
        obj.total = obj.total - obj.valor;

        if (obj.quantidade <= 0) {
          objectToRemove.push(obj.id);
        }

        return obj;
      }
      return obj;
    });
    setCart(newCart);
    setCart(cart.filter((obj) => !objectToRemove.includes(obj.id)));
  };

  return (
    <Container>
      <Content>
        <Thead>
          <Tr>
            <Th>Produto</Th>
            <Th>Valor</Th>
            <Th>Quantidade</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((obj, index) => (
            <Tr className={index % 2 === 0 ? "gray" : "white"} key={obj.id}>
              <Td className="product">{obj.nome}</Td>
              <Td>{"R$" + " " + obj.valor}</Td>
              <Td className="quantity">
                <Button
                  color="var(--text-color)"
                  background="var(--bg-secondary-gray)"
                  onClick={() => handleClickDecrement(obj.id)}
                >
                  <IoMdRemove />
                </Button>
                {obj.quantidade}
                <Button
                  color="#ffff"
                  background="var(--bg-red)"
                  onClick={() => handleClickIncrement(obj.id)}
                >
                  <BsPlus />
                </Button>
              </Td>
              <Td>{"R$" + " " + obj.total}</Td>
            </Tr>
          ))}
        </Tbody>
      </Content>
    </Container>
  );
};

export default Table;
