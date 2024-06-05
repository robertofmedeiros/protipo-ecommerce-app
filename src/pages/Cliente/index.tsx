import { TextField } from "@mui/material";
import { FC, useState } from "react";
import "./index.css"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import InputSenha from "../../components/InputSenha";
import InputDocumento from "../../components/InputDocumento";
import InputSelect from "../../components/InputSelect";
import { generos } from "./types";

const Cliente: FC = () => {
    const [documento, setDocumento] = useState<string>();
    const [genero, setGenero] = useState<string>();
    
    return <>
        <div className="div-box-cliente">
            <div className="div-box-cliente-dados-pessoais">
                <div className="div-box-cliente-linha">
                    <TextField
                        fullWidth
                        label="Nome" />
                </div>
                <div className="div-box-cliente-linha">
                    <TextField
                        fullWidth
                        label="Sobrenome" />
                </div>
                <div className="div-box-cliente-linha">
                    <InputDocumento 
                        label="CPF" 
                        mascara="cpf"
                        value={documento || ""}
                        onChange={(value) => {
                            setDocumento(value);
                        }} />
                </div>
                <div className="div-box-cliente-linha">
                    <InputSelect 
                        label="Genero" 
                        list={generos}
                        value={genero}
                        onChange={(value) => {
                            setGenero(value)
                        }} />
                </div>
                <div className="div-box-cliente-linha">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Data de Nascimento"
                            className="campo-data" />
                    </LocalizationProvider>
                </div>
                <div className="div-box-cliente-linha">
                    <InputSenha
                        label="Senha"
                        senha={""}
                        onChange={(senha) => {

                        }} />
                </div>
            </div>
        </div>
    </>
}

export default Cliente;