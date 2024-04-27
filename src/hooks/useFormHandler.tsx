import { useState } from "react";
import { FormInputsData } from "../formBuilder/formBuilderInterTypes";
import { useFileTypes, useProvinces } from "../services/hooks";
import { useCountries } from "../services/hooks/useCountries";

export const useFormHandler = () => {
  const [disableInputs, setDisableInputs] = useState({ county: true });
  const [provinceId, setProvinceId] = useState<string | number>("");

  const { data: provinces } = useProvinces();
  const { data: fileTypes } = useFileTypes();
  const { data: countries } = useCountries(provinceId);

  const formData: FormInputsData = [
    {
      type: "select",
      name: "file_type",
      label: "نوع پرونده",
      options: fileTypes,
    },
    {
      type: "select",
      name: "province",
      label: "نام استان",
      options: provinces,
    },
    {
      type: "select",
      name: "county",
      label: "شهر",
      options: countries,
      disabled: !!provinceId ? false : true,
    },
    {
      type: "text",
      name: "insurer_full_name",
      label: "نام بیمه گذار",
    },
  ];
  const onChange = {
    province: (value: string | number) => {
      setDisableInputs({ county: false });
      setProvinceId(value);
    },
  };

  return { formData, disableInputs, onChange };
};
