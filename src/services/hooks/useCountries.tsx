import { useQuery } from "@tanstack/react-query";
import getCountries from "../api/countries";
import { county } from "../../types/countryTypes";

export const useCountries = (id: string | number) => {
  return useQuery({
    queryKey: ["countries", id],
    queryFn: () => getCountries(id),
    enabled: !!id,
    select: (data) => {
      const maindata = data?.map((item: county) => ({
        value: item.id,
        label: item.name,
      }));
      return maindata;
    },
  });
};
