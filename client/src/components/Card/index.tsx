import React, { useState } from "react";
import Modal from "react-modal";

import {
  Button,
  Caption,
  Container,
  Image,
  ImageContainer,
  ModalCard,
  ModalContainer,
  ModalData,
  Total,
} from "./styles";

import { useCart } from "../../context/cart";
import { useUnique } from "../../context/uniqueId";

interface IProps {
  id: number;
  name: string;
  url: string;
  caption: string;
  price: number;
}

Modal.setAppElement("#root");
const Card: React.FC<IProps> = ({ id, url, caption, name, price }: IProps) => {
  const { cart, setCart } = useCart();
  const { uniqueId } = useUnique();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Image
        src={url}
        height={"70%"}
        width={"100%"}
        draggable={false}
        onClick={() => setIsOpen(true)}
      />
      <Caption onClick={() => setIsOpen(true)}>
        <span>{name}</span>
      </Caption>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.31)",
          },

          content: {
            width: "77vw",
            height: "75%",
            padding: 0,
            margin: "auto",
          },
        }}
      >
        <ModalContainer>
          <ImageContainer>
            <Image src={url} height="100%" width="100%" draggable={false} />
          </ImageContainer>
          <ModalData>
            <ModalCard>
              <div className="options">
                <h3>{name}</h3>
              </div>
              <div className="info">
                <span className="rule">Obrigatório</span>
                <span className="price">R$ {price}</span>
              </div>
            </ModalCard>
            <span className="caption">{caption}</span>
            <Total>
              <span>Total</span>
              <span className="total_money">R$ {price}</span>
            </Total>
            <Button
              onClick={() => {
                setCart([
                  ...cart,
                  {
                    id,
                    nome: name,
                    quantidade: 1,
                    valor: price,
                    total: price,
                  },
                ]);

                setIsOpen(false);
              }}
              disabled={uniqueId.includes(id) ? true : false}
            >
              Adicionar
            </Button>
          </ModalData>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Card;
