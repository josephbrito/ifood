import React from "react";

// types for menu context
export interface IMenu {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  url: string;
  categoria_id: number;
}

export interface IMenuData {
  menu: IMenu[];
  setMenu: (menu: IMenu[]) => void;
}

export const MENU_DEFAULT_VALUE = {
  menu: [],
  setMenu: () => {},
};
// end types for menu context

// types for categories context
export interface ICategories {
  id: number;
  nome: string;
}

export interface ICategoriesData {
  categories: ICategories[];
  setCategories: (c: ICategories[]) => void;
}

export const CATEGORIES_DEFAULT_VALUE = {
  categories: [],
  setCategories: () => {},
};
// end types for categories context

// types for requests context
export interface IProducts {
  id: number;
  quantidade: number;
  valor: number;
}

export interface IRequests {
  produtos: IProducts[];
  cidade: string;
  estado: string;
  bairro: string;
  complemento?: string;
  referencia?: string;
  endereco: string;
  numero?: string;
  cep: string;
  valor_total: number;
}

export interface IRequestsData {
  requests: IRequests[];
  setRequests: (req: IRequests[]) => void;
}

export const REQUESTS_DEFAULT_VALUE = {
  requests: [],
  setRequests: () => {},
};
// end types for requests context

// viacep data
export interface IViaCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
// end via cep data

// cart context
export interface ICart {
  id: number;
  nome: string;
  quantidade: number;
  valor: number;
  total: number;
}

export interface ICartData {
  cart: ICart[];
  setCart: (obj: ICart[]) => void;
}

export const CART_DEFAULT_VALUE = {
  cart: [],
  setCart: () => {},
};
// end cart context

// children
export interface IChildren {
  children: React.ReactNode;
}
