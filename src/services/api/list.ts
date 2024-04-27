import Http from "../HttpConfig";

const addList = async ({ body, page }: { body: any; page: any }) => {
  const data = await Http.post(
    `portal/branch/branch_file_list_v2/?page=${page}`,
    body
  );
  return data?.data;
};

export default addList;
