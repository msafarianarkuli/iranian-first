import { JSX } from "react";

import TextInput from "../core/inputs/TextInput";
import {
  FormBuilderInputComponents,
  FormBuilderProps,
  FormInputs,
  SelectionInputProps,
  TextInputData,
} from "./formBuilderInterTypes";
import { SelectInput } from "../core";
import { Grid } from "@mui/material";

const inputsComponents = (
  inputProps: FormBuilderInputComponents
): JSX.Element | null => {
  const { input, displayNone, type, ...rest } = inputProps;

  if (displayNone) return null;
  const inputs = {
    text: (
      <TextInput {...rest} {...(input as TextInputData)} key={input.name} />
    ),
    select: (
      <SelectInput
        {...rest}
        {...(input as SelectionInputProps)}
        key={input.name}
      />
    ),
  };
  return inputs[type as keyof typeof inputs];
};
const FormBuilder = ({
  FormInputsData,
  formController,
  formHandler,
}: FormBuilderProps): JSX.Element => {
  const form = FormInputsData.map((inputData: FormInputs, index) => {
    const { type, ...input } = inputData;
    return (
      <Grid item xs={6} md={4} key={index}>
        {inputsComponents({
          formController,
          input,
          type,
          onChange: formHandler?.onChange?.[input.name],
          onClick: formHandler?.onClick?.[input.name],
          onFocus: formHandler?.onFocus?.[input.name],
          disabled: formHandler?.disableInputs?.[input.name],
          displayNone: formHandler?.noneDisplayedInputs?.[input.name],
        })}
      </Grid>
    );
  });
  return <>{form}</>;
};

export default FormBuilder;
