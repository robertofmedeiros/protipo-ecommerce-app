import { AlternateEmail, Key, VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { FC, useState } from "react";
import "./index.css"

interface LoginProperties {
    onClose: () => void;
}
const Login: FC<LoginProperties> = ({
    onClose,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return <>
        <div className="popover-login">
                <div className="popover-login-linha">
                    <TextField
                        fullWidth
                        type="email"
                        InputProps={{
                            startAdornment: <>
                                <InputAdornment position="start">
                                    <AlternateEmail />
                                </InputAdornment>
                            </>
                        }}
                        />
                </div>
                <div className="popover-login-linha">
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
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
                        />
                </div>
                <div className="popover-login-linha">
                    <Button onClick={onClose} style={{width: "60%"}}>Voltar</Button>
                    <Button style={{width: "40%"}} variant="contained">Entrar</Button>
                </div>
                <div className="popover-login-linha">
                    <p>Não tem uma conta? <a href="/cliente/">Cadastre-se</a></p>
                </div>
            </div>
    </>
}

export default Login;