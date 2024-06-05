import { FC, useCallback } from "react";
import { cnpj, cpf } from "./masks";
import { TextField } from "@mui/material";

interface InputDocumentoProperties {
    mascara: "cpf" | "cnpj";
    label?: string;
    value: string;
    onChange: (value: string) => void;

}

const InputDocumento: FC<InputDocumentoProperties> = ({
    mascara,
    value,
    onChange,
    label
}) => {

    const handleKeyUp = useCallback(
        (e: any) => {
          if (mascara === "cpf") {
            cpf(e);
          }
    
          if (mascara === "cnpj") {
            cnpj(e);
          }
        },
        [mascara]
      );

    return <>
        <TextField
            fullWidth
            value={value}
            label={label}
            onKeyUp={handleKeyUp} 
            onChange={(event) => {
                if(event){
                    onChange(event.target.value);
                }
            }} />
    </>
}

export default InputDocumento;