import { useQuery } from "@tanstack/react-query";
import getFileTypes from "../api/filesTypes";
import { fileTypes } from "../../types/filetypesType";

export const useFileTypes = () => {
  return useQuery({
    queryKey: ["fileTypes"],
    queryFn: getFileTypes,
    select: (data) => {
      const maindata = data?.results?.map((item: fileTypes) => ({
        value: item.const_name,
        label: item.fa_name,
      }));
      return maindata;
    },
  });
};
