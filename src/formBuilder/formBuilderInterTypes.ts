import { SxProps } from "@mui/material/styles";
import { TextFieldProps, Theme } from "@mui/material";
import { JSX } from "react";
import {
  FieldValues,
  UseControllerProps,
  UseFormReturn,
} from "react-hook-form";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

export type SelectionInputOptions = {
  label: string;
  value: string | number;
};

type TextFieldPropsWithoutOnchange = Omit<TextFieldProps, "onChange" | "type">;
type SelectionInputPropsWithoutOnchange = Omit<
  SelectInputProps,
  "onChange" | "type"
>;

interface BasicFormInputProps {
  name: string;
  rules?: UseControllerProps["rules"];
  label?: string;
  title?: string;
  formController: UseFormReturn<any, any>;
  onChange?: (value: string) => void;
  onClick?: (value: string) => void;
}

export type TextInputProps = {
  type?: "text";

  inputSx?: SxProps;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type SelectionInputProps = {
  type?: "select";
  options?: SelectionInputOptions[];
} & (Partial<SelectionInputPropsWithoutOnchange> & BasicFormInputProps);

export type TextInputData = Omit<TextInputProps, "formController">;
export type SelectionModalInputData = Omit<
  SelectionInputProps,
  "formController"
>;

export type FormInputs = TextInputData | SelectionModalInputData;

export type FormInputsData = FormInputs[];

export type FormDataReturn = {
  onChange?: { [key: string]: (value: number | string) => void };
  onClick?: { [key: string]: (value: number | string) => void };
  onFocus?: Record<string, () => void>;
  disableInputs?: { [key: string]: boolean };
  noneDisplayedInputs?: { [key: string]: boolean };
  formData?: FormInputsData;
};

export interface FormBuilderProps {
  formHandler?: FormDataReturn;
  FormInputsData: FormInputsData;
  formController: UseFormReturn;
}

export type FormBuilderInputComponents = {
  input: FormInputs;
  type: FormInputs["type"];
  onChange?: (value: any) => any;
  onClick?: (value: any) => void;
  onFocus?: () => void;
  disabled?: boolean;
  displayNone?: boolean;
  formController: UseFormReturn<FieldValues, any, undefined>;
};

export type DisableInputs = { [key: string]: boolean };
