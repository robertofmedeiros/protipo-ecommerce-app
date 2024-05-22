import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface InputQuantidadeProperties {
    quantidade: number,
    atualizarQuantidade: (quantidade: number) => void,
}

const InputQuantidade: FC<InputQuantidadeProperties> = ({
    quantidade,
    atualizarQuantidade,
}) => {
    return <>
        <Box className="box">
            <IconButton
                size="small"
                className="remove"
                onClick={() => {
                    atualizarQuantidade(quantidade - 1)
                }}
            >
                <RemoveIcon fontSize="small" />
            </IconButton>

            <TextField
                className="input"
                margin="normal"
                type="number"
                size="small"
                value={quantidade}
                onChange={(event) => {
                    if(event){
                        atualizarQuantidade(Number(event.target.value || ""))
                    }
                }}

            />

            <IconButton
                size="small"
                className="add"
                onClick={() => {
                    atualizarQuantidade(quantidade + 1)
                }}
            >
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    </>
}

export default InputQuantidade;