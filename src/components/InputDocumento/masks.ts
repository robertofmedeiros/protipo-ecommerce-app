const cnpjMask = /^(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})$/;
const cpfMask = /^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/;

export const parseCPF = (value: string): string => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/((\d{3}.\d{3}.\d{3}-|\d{3}.\d{3}.\d{3}))(\d{1,})$/, "$1-$3");
    return value
}

export const parseCNPJ = (value: string): string => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{2}.\d{3}.\d{3}\/\d{4}\-|\d{2}.\d{3}.\d{3}\/\d{4})(\d{1,})$/, "$1-$2");
    return value;
}

export const cpf = (e: any) => {
    e.target.maxLength = 14;
    let value = e.target.value;
    if (!value.match(cpfMask)) {
        value = parseCPF(value)
        e.target.value = value;
    }
    return e;
}

export const cnpj = (e: any) => {
    e.target.maxLength = 18;
    let value = e.target.value;
    if (!value.match(cnpjMask)) {
        value = parseCNPJ(value)
        e.target.value = value;
    }
    return e;
}