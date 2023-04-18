import axios from "axios";
import { IViaCep } from "../context/types";

export const api = axios.create({
  baseURL: "http://localhost:4000/",
});

export async function viacep(cep: string) {
  const api = axios.create({
    baseURL: `https://viacep.com.br/ws/${cep}/json/`,
  });

  const req = await api.get("");
  const data: IViaCep = req.data;

  return data;
}
