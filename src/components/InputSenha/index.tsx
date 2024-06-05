import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, IconButton } from "@mui/material";
import { FC, ReactNode, useState } from "react";

interface InputSenhaProperties {
    startAdornment?: ReactNode;
    label?: string;
    senha: string;
    onChange: (senha: string) => void;
}

const InputSenha: FC<InputSenhaProperties> = ({
    startAdornment,
    senha,
    label,
    onChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    return <>
        <TextField
            label={label}
            value={senha}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputProps={{
                startAdornment: startAdornment || "",
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
                    onChange(event.target.value);
                }
            }}
        />
    </>
}

export default InputSenha;