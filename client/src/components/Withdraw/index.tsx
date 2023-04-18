import React, { useState } from "react";

import Modal from "react-modal";

import {
  Button,
  Container,
  Finish,
  FinishContainer,
  Header,
  ImageDone,
  Total,
} from "./styles";

import Logo from "../../assets/logo.png";
import Done from "../../assets/done.png";

import Table from "../Table";

import { useTotal } from "../../context/total";
import { useDone } from "../../context/done";

import { MdDone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import { useCart } from "../../context/cart";
import { useOpen } from "../../context/open";
import Fields from "../Fields";
import { Cart } from "../Menu/styles";
import { BsCartCheckFill } from "react-icons/bs";

Modal.setAppElement("#root");
const Withdraw: React.FC = () => {
  const { cart, setCart } = useCart();
  const { total } = useTotal();
  const { isDone, setIsDone } = useDone();
  const { isMenuOpen, setIsMenuOpen } = useOpen();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container className={isMenuOpen ? "withdraw_active" : ""}>
      <Cart onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <BsCartCheckFill />
      </Cart>
      <Header>
        <img src={Logo} draggable={false} />
      </Header>
      <Table />
      <FinishContainer>
        <Total>
          <span>Total</span>
          <span className="total_money">R$ {total}</span>
        </Total>
        <Finish>
          <Button
            background="var(--bg-red)"
            color="#ffff"
            border_color="var(--bg-red)"
            onClick={() => setIsOpen(true)}
            disabled={!cart.length ? true : false}
          >
            <MdDone />
            Finalizar
          </Button>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={{
              overlay: {
                background: "rgba(0, 0, 0, 0.31)",
              },

              content: {
                width: isMenuOpen ? "80%" : "33%",
                height: "90%",
                margin: isMenuOpen ? "auto 0" : "auto",

                background: "#FFFFFF",
                border: "1px solid #FFFFFF",
                boxShadow: "0px 2.88px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
              },
            }}
          >
            <GrFormClose
              style={{
                position: "absolute",
                right: 0,
                marginRight: 20,
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <Fields setIsOpen={setIsOpen} />
          </Modal>
          <Button
            background="var(--bg-container)"
            color="var(--text-color)"
            border_color="var(--text-color)"
            onClick={() => setCart([])}
          >
            <AiOutlineClose />
            Cancelar
          </Button>
          <Modal
            isOpen={isDone}
            onRequestClose={() => setIsDone(false)}
            style={{
              overlay: {
                background: "rgba(0, 0, 0, 0.31)",
              },
              content: {
                width: isMenuOpen ? "80%" : 483,
                height: 408,
                margin: "auto",
                background: "#FFFFFF",
                boxShadow: "0px 2.88px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <ImageDone src={Done} />
            <Button
              background="var(--bg-done)"
              color="#ffff"
              width="80%"
              onClick={() => setIsDone(false)}
            >
              Continuar
            </Button>
          </Modal>
        </Finish>
      </FinishContainer>
    </Container>
  );
};

export default Withdraw;
