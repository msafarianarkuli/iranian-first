import Http from "../HttpConfig";

const getCountries = async (provinceID: string | number) => {
  const data = await Http.get(
    `portal/admin/setting/wop/?state=county&all_sub_county=1&province=${provinceID}`
  );
  return data?.data?.results;
};

export default getCountries;
