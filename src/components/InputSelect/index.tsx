import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { FC } from "react";

interface InputSelectProperties {
    value: any,
    list: any,
    onChange: (value: string) => void,
    label?: string
}

const InputSelect: FC<InputSelectProperties> = ({
    value,
    list,
    onChange,
    label
}) => {
    return <>
        <FormControl fullWidth>
            <InputLabel id="input-select">{label}</InputLabel>
            <Select
                labelId="input-select"
                fullWidth
                value={value}
                onChange={(event) => {
                    if (event) {
                        onChange(event.target.value);
                    }
                }}
            >
                {list.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}

export default InputSelect;