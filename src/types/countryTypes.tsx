import { province } from "./provinceTypes";

export type county = {
  id: number;
  name: string;
  province: province;
  is_active: boolean;
  created_date: number;
};
