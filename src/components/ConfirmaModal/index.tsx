import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { FC, useState } from "react";

interface ComfirmaModalProperties {
    open: boolean,
    titulo: string;
    mensagem: React.ReactNode;
    onConfirma: () => void;
    onCancelar: () => void;
}

const ComfirmaModal: FC<ComfirmaModalProperties> = ({
    open,
    titulo,
    mensagem,
    onConfirma,
    onCancelar,
}) => {

    return <>
        <Dialog
            open={open}
            onClose={onCancelar}>
            <DialogTitle>{titulo}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {mensagem}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={onCancelar}>Cancelar</Button>
                <Button variant="contained" onClick={onConfirma}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default ComfirmaModal;