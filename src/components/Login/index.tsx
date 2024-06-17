import { AlternateEmail, Key, VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { FC, useState } from "react";
import "./index.css"
import { IDataResponse, STATUS_CODE, apiPost } from "../../api/RestClient";
import { addCliente } from "../../store/ClientesStore/clientesStoreUtil";
import { IClientesStore } from "../../store/ClientesStore/types";
import { IClientes } from "../../pages/Cliente/types";

interface LoginProperties {
    onLogin: (cliente: IClientesStore) => void;
    onClose: () => void;
}
const Login: FC<LoginProperties> = ({
    onClose,
    onLogin,
}) => {
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const realizarLogin = async () => {
        const data = {
            email,
            senha,
        }

        const reponsePost: IDataResponse = await apiPost("/clientes/autenticar/", data);
        if(reponsePost.statusCode === STATUS_CODE.OK){
            const data: IClientes = reponsePost.data;

            const cliente: IClientesStore = {
                id: data.id,
                email: data.email,
                nome: data.nome,
            }

            const clienteStore = addCliente(cliente);

            onLogin(clienteStore);
        }
    }

    return <>
        <div className="popover-login">
                <div className="popover-login-linha">
                    <TextField
                        fullWidth
                        type="email"
                        value={email || ""}
                        InputProps={{
                            startAdornment: <>
                                <InputAdornment position="start">
                                    <AlternateEmail />
                                </InputAdornment>
                            </>
                        }}
                        onChange={(event) => {
                            if(event){
                                setEmail(event.target.value);
                            }
                        }}
                        />
                </div>
                <div className="popover-login-linha">
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        value={senha || ""}
                        InputProps={{
                            startAdornment: <>
                                <InputAdornment position="start">
                                    <Key />
                                </InputAdornment>
                            </>,
                            endAdornment: <>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </>
                        }}
                        onChange={(event) => {
                            if(event){
                                setSenha(event.target.value);
                            }
                        }}
                        />
                </div>
                <div className="popover-login-linha">
                    <Button onClick={onClose} style={{width: "60%"}}>Voltar</Button>
                    <Button style={{width: "40%"}} variant="contained" onClick={realizarLogin}>Entrar</Button>
                </div>
                <div className="popover-login-linha">
                    <p>Não tem uma conta? <a href="/cliente/">Cadastre-se</a></p>
                </div>
            </div>
    </>
}

export default Login;