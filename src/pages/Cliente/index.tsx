import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import "./index.css"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import InputSenha from "../../components/InputSenha";
import InputDocumento from "../../components/InputDocumento";
import InputSelect from "../../components/InputSelect";
import { generos } from "./types";
import { Moment } from "moment";
import { IDataResponse, STATUS_CODE, apiPost } from "../../api/RestClient";

const Cliente: FC = () => {
    const [documento, setDocumento] = useState<string>();
    const [genero, setGenero] = useState<string>();
    const [nome, setNome] = useState<string>();
    const [sobrenome, setSobrenome] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [dataNascimento, setDataNascimento] = useState<Moment>();
    const [email, setEmail] = useState<string>();
    
    const onSalvar = async () => {
        const data = {
            documento,
            sobrenome,
            email,
            dataNascimento,
            sexo: genero,
            senha,
            nome,
        }

        const reponsePost: IDataResponse = await apiPost("/clientes/", data);
        if(reponsePost.statusCode === STATUS_CODE.CREATED){
            alert("Cliente criado com sucesso!");
            window.location.href = "/"
        }
    }

    return <>
        <div className="div-box-cliente">
            <div className="div-box-cliente-dados-pessoais">
                <div className="div-box-cliente-linha">
                    <TextField
                        fullWidth
                        value={nome}
                        label="Nome"
                        onChange={(event) => {
                            if(event){
                                setNome(event.target.value);
                            }
                        }} />
                </div>
                <div className="div-box-cliente-linha">
                    <TextField
                        fullWidth
                        label="Sobrenome" 
                        value={sobrenome}
                        onChange={(event) => {
                            if(event){
                                setSobrenome(event.target.value);
                            }    
                        }} />
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
                    <TextField
                        fullWidth
                        label="Email" 
                        value={email}
                        onChange={(event) => {
                            if(event){
                                setEmail(event.target.value);
                            }    
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
                            name="input-data-nascimento"
                            key={"input-data-nascimento"}
                            label="Data de Nascimento"
                            className="campo-data"
                            value={dataNascimento || null} 
                            onChange={(event) => {
                                if(event){
                                    setDataNascimento(event);
                                }
                            }} />
                    </LocalizationProvider>
                </div>
                <div className="div-box-cliente-linha">
                    <InputSenha
                        label="Senha"
                        senha={senha || ""}
                        onChange={(senha) => {
                            if(senha){
                                setSenha(senha);
                            }
                        }} />
                </div>
                <div className="div-box-cliente-linha">
                    <Button 
                        variant="contained"
                        onClick={() => {
                            onSalvar();
                        }}>
                        Salvar
                    </Button>
                </div>
            </div>
        </div>
    </>
}

export default Cliente;