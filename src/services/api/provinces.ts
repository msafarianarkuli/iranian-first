import Http from "../HttpConfig";

const getProvinces = async () => {
  const data = await Http.get("portal/admin/setting/wop/?state=province");
  return data?.data?.results;
};

export default getProvinces;
