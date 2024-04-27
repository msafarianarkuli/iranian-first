import { InputLabel, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useController } from "react-hook-form";
import { TextInputProps } from "../../formBuilder/formBuilderInterTypes";

const TextInput: FC<TextInputProps> = (props) => {
  const {
    name,
    label,
    formController: { control },
    onChange: handleInputChange,
    disabled,
    rules,
    ...rest
  } = props;
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    control,
    name,
    rules,
    defaultValue: "",
  });
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e);
    handleInputChange?.(e.target.value);
  };

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField
        sx={{ width: "100%" }}
        size="small"
        id={name}
        value={value}
        disabled={disabled}
        {...rest}
        onChange={onInputChange}
      />
      {fieldState.error ? (
        <Typography sx={{ color: "error.main" }} variant="subtitle2">
          {fieldState.error.message}
        </Typography>
      ) : null}
    </>
  );
};

export default TextInput;
