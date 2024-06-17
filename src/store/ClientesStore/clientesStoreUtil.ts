import { IClientesStore } from "./types";

const CLIENTES_STORE = "cliente";

export const addCliente = (cliente: IClientesStore): IClientesStore => {
    addClienteStore(cliente);

    return cliente;
} 

const addClienteStore = (cliente: IClientesStore) => {
    localStorage.setItem(CLIENTES_STORE, JSON.stringify(cliente));
}

export const obterCliente = (): IClientesStore => {

    const clienteStore: IClientesStore = JSON.parse(localStorage.getItem(CLIENTES_STORE) || "{}");

    return clienteStore || null;
}