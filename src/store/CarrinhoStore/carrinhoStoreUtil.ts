import { BehaviorSubject } from "rxjs";
import { ICarrinhoStore } from "./types";

export const carrinho$ = new BehaviorSubject<ICarrinhoStore[]>([]);

export const addCarrinho = (itemCarrinho: ICarrinhoStore) => {
    const carrinho: ICarrinhoStore[] = obterCarrinho();

    console.log(">>>", carrinho);

    if (carrinho) {
        const idx = carrinho?.findIndex((c: ICarrinhoStore) => c.id === itemCarrinho.id);
        if (idx > -1) {
            carrinho[idx] = itemCarrinho;
        } else {
            carrinho.push(itemCarrinho);
        }
        addCarrinhoStore(carrinho);
    }else {
        const carrinho = [itemCarrinho];
        addCarrinhoStore(carrinho);
    }
    console.log(">>>", obterCarrinho(), carrinho);
}

export const obterCarrinho = (): ICarrinhoStore[] => {
    const carrinhoList: ICarrinhoStore[] = carrinho$.getValue();
    if (carrinhoList && carrinhoList.length) {
        return carrinhoList || [];
    }

    const carrinhoListStore: ICarrinhoStore[] = JSON.parse(localStorage.getItem("carrinho") || "[]");

    addCarrinhoStore(carrinhoListStore);

    return carrinhoListStore || [];
}

const addCarrinhoStore = (carrinho: ICarrinhoStore[]) => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carrinho$.next(carrinho);
}

export const obterQuantidadeCarrinho = (): number => {
    const carrinhoListStore: ICarrinhoStore[] = JSON.parse(localStorage.getItem("carrinho") || "[]");

    return carrinhoListStore?.length || 0;
}