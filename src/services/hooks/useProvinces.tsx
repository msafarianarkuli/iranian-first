import { useQuery } from "@tanstack/react-query";
import getProvinces from "../api/provinces";
import { province } from "../../types/provinceTypes";

export const useProvinces = () => {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: getProvinces,
    select: (data) => {
      const maindata = data?.map((item: province) => ({
        value: item.id,
        label: item.name,
      }));
      return maindata;
    },
  });
};
