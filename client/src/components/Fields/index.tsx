import React, { ChangeEvent, useState } from "react";
import { useCart } from "../../context/cart";
import { useDone } from "../../context/done";
import { useTotal } from "../../context/total";
import { IProducts, IRequests } from "../../context/types";
import { api, viacep } from "../../services";
import { Button } from "../Card/styles";

import {
  Container,
  Select,
  DeliveryWayContainer,
  Label,
  Option,
  Local,
  CepContainer,
  Input,
  NeighborhoodContainer,
  LocalCity,
  NumberContainer,
  CityContainer,
  InfoContainer,
} from "./styles";

interface IProps {
  setIsOpen: (arg: boolean) => void;
}

const Fields: React.FC<IProps> = ({ setIsOpen }: IProps) => {
  const { isDone, setIsDone } = useDone();

  const { cart, setCart } = useCart();
  const { total } = useTotal();

  const [delivery, setDelivery] = useState<boolean>(true);
  const [withdraw, setWithdraw] = useState<boolean>(false);

  const [cep, setCep] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [numberHouse, setNumberHouse] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const [publicPlace, setPublicPlace] = useState<string>("");

  const handleChangeSelectDelivery = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    if (e.target.value == "delivery") {
      setDelivery(true);
      setWithdraw(false);
    } else {
      setDelivery(false);
      setWithdraw(true);
    }
  };

  const handleViaCep = async () => {
    const viacepdata = await viacep(cep);

    setNeighborhood(viacepdata.bairro);
    setCity(viacepdata.localidade);
    setState(viacepdata.uf);
    setPublicPlace(viacepdata.logradouro);
  };

  const submitData = async () => {
    if (delivery) {
      if (!cep || !neighborhood || !numberHouse || !city || !state) {
        alert("Preencha todos os campos!");
        return;
      }

      const productsForData: IProducts[] = cart.map((obj) => {
        return {
          id: obj.id,
          quantidade: obj.quantidade,
          valor: obj.valor,
        };
      });

      const alldata: IRequests = {
        produtos: productsForData,
        cidade: city,
        bairro: neighborhood,
        cep: cep,
        endereco: publicPlace,
        estado: state,
        valor_total: total,
        complemento: complement,
        numero: numberHouse,
        referencia: reference,
      };

      try {
        await api.post("pedidos", alldata);
        setIsOpen(false);
        setCart([]);
        setIsDone(true);
      } catch (error: any) {
        alert(error.response.data);
        return;
      }
    } else if (withdraw) {
      const productsForData: IProducts[] = cart.map((obj) => {
        return {
          id: obj.id,
          quantidade: obj.quantidade,
          valor: obj.valor,
        };
      });

      const alldata = {
        produtos: productsForData,
      };
      try {
        await api.post("pedidos", alldata);
        setIsOpen(false);
        setCart([]);
        setIsDone(true);
      } catch (error: any) {
        alert(error.response.data);
        return;
      }
    }
  };

  if (withdraw) {
    return (
      <Container>
        <DeliveryWayContainer>
          <Label>Forma de Entrega</Label>
          <Select onChange={handleChangeSelectDelivery}>
            <Option value="delivery">Delivery</Option>
            <Option value="withdrawl" selected>
              Retirada
            </Option>
          </Select>
        </DeliveryWayContainer>
        <Button
          width="100%"
          onClick={(e) => {
            e.preventDefault();
            submitData();
          }}
        >
          Continuar
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <DeliveryWayContainer>
        <Label>Forma de Entrega</Label>
        <Select onChange={handleChangeSelectDelivery}>
          <Option value="delivery">Delivery</Option>
          <Option value="withdrawl">Retirada</Option>
        </Select>
        <Local>
          <CepContainer>
            <Label>CEP</Label>
            <Input
              type="text"
              width="100%"
              placeholder="12345-678"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={handleViaCep}
              maxLength={9}
            />
          </CepContainer>
          <NeighborhoodContainer>
            <Label>Bairro</Label>
            <Select disabled required defaultValue={"DEFAULT"}>
              <Option value="DEFAULT">Escolha seu bairro</Option>
              <Option
                value={neighborhood}
                selected={neighborhood ? true : false}
              >
                {neighborhood}
              </Option>
            </Select>
          </NeighborhoodContainer>
        </Local>
        <LocalCity>
          <NumberContainer>
            <Label>Número</Label>
            <Input
              type="text"
              width="100%"
              placeholder="Número"
              value={numberHouse}
              onChange={(e) => setNumberHouse(e.target.value)}
            />
          </NumberContainer>
          <CityContainer>
            <Label>Cidade</Label>
            <Input
              type="text"
              width="100%"
              placeholder="Cidade"
              value={city}
              readOnly
              disabled
              required
            />
          </CityContainer>
        </LocalCity>
        <InfoContainer>
          <Label>Estado</Label>
          <Input
            type="text"
            width="100%"
            placeholder="Estado"
            value={state}
            readOnly
            disabled
            required
          />
          <Label>Complemento</Label>
          <Input
            type="text"
            width="100%"
            placeholder="Complemento"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
          <Label>Referência</Label>
          <Input
            type="text"
            width="100%"
            placeholder="Referência"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </InfoContainer>
      </DeliveryWayContainer>

      <Button
        width="100%"
        onClick={(e) => {
          e.preventDefault();
          submitData();
        }}
        disabled={!cart.length ? true : false}
      >
        Continuar
      </Button>
    </Container>
  );
};

export default Fields;
