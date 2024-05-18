import { FormControl, InputLabel } from "@mui/material";
import { FC, ReactNode } from "react";
interface InputInfoProperties {
    label: ReactNode,
    text?: ReactNode,
}
const InputInfo: FC<InputInfoProperties> = ({
    label,
    text,
}) => {
    return <>
        <FormControl size={"small"} fullWidth margin="dense">
            <InputLabel shrink={label != ""}>
                <strong>{label}</strong>
            </InputLabel>
            <p style={{ textAlign: "left" }}>{text}</p>
        </FormControl>

    </>
}

export default InputInfo;