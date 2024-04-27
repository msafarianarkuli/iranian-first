import Http from "../HttpConfig";

const getFileTypes = async () => {
  const data = await Http.get("constants/file_types/");
  return data?.data;
};

export default getFileTypes;
