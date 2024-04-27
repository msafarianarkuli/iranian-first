import { FC, ReactNode } from "react";
import {
  Select,
  MenuItem,
  Typography,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useController } from "react-hook-form";
import { SelectionInputProps } from "../../formBuilder/formBuilderInterTypes";

const SelectInput: FC<SelectionInputProps> = (props) => {
  const {
    label,
    formController: { control },
    onChange: handleInputChange,
    onFocus,
    onClick,
    disabled,
    name,
    options,
    ...rest
  } = props;

  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    control,
    name,
    defaultValue: "",
  });

  const onInputChange = (e: SelectChangeEvent<unknown>, child: ReactNode) => {
    onChange(e);
    handleInputChange?.(e.target.value as string);
  };

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select
        sx={{ width: "100%" }}
        {...rest}
        size="small"
        value={value}
        onChange={onInputChange}
        disabled={disabled}
      >
        {options?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {fieldState.error ? (
        <Typography sx={{ color: "error.main" }} variant="subtitle2">
          {fieldState.error.message}
        </Typography>
      ) : null}
    </>
  );
};

export default SelectInput;
