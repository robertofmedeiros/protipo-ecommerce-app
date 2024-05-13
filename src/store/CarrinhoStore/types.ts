import { IProdutos } from "../../pages/Home/types";

export interface ICarrinhoStore extends IProdutos {
    quantidade: number,
}