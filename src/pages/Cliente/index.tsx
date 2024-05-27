import { Box, TextField } from "@mui/material";
import { FC } from "react";
import "./index.css"

const Cliente: FC = () => {
    return <>
        <div className="div-box-cliente">
            <Box
                padding={10}
                border="2px solid grey"
                borderRadius="10px"
                width="80%"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                  }}>
                <div>
                    <TextField
                        fullWidth
                        label="Nome" />
                    <TextField
                        fullWidth
                        label="Sobrenome" />
                    <TextField
                        fullWidth
                        label="CPF" />
                </div>
            </Box>
        </div>
    </>
}

export default Cliente;