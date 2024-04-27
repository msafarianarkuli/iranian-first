import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { Container, CustomButton } from "../core";

import FormBuilder from "../formBuilder/FormBuilder";
import { useFormHandler } from "../hooks/useFormHandler";

import addList from "../services/api/list";
import { Card } from "../core/card/Card";

const Home = () => {
  const [page, setPage] = useState(1);
  const formHandler = useFormHandler();

  const defaultValues = formHandler.formData
    ?.map((item) => ({ [item.name]: "" }))
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});

  const formController = useForm<FieldValues>(defaultValues);
  const {
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitSuccessful },
  } = formController;

  const { mutate, data, isPending } = useMutation({
    mutationFn: addList,
    mutationKey: ["add", page],
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const body = {
      branch: "all",
      ...(data.county && { county: data.county }),
      ...(data.file_type && { file_type: data.file_type }),
      ...(data.province && { province: data.province }),
      insurer_full_name: data.insurer_full_name,
      province: data.province,
      state: "branch_file_list",
    };
    mutate({ body, page });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      mutate({
        body: {
          ...formController.getValues(),
          branch: "all",
          state: "branch_file_list",
        },
        page: page,
      });
    }
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box maxWidth="lg" mx="auto" my="100px">
      <p>جستجو و فیلتر</p>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <FormBuilder
              FormInputsData={formHandler.formData}
              formController={formController}
              formHandler={formHandler}
            />
            <Grid item xs={6} md={4}>
              <CustomButton sx={{ mt: "23px" }} text="فیلتر" type="submit" />
            </Grid>
            <Grid item xs={6} md={4}>
              <CustomButton
                sx={{ mt: "23px" }}
                text="حذف فیلتر ها"
                onClick={() => reset(defaultValues)}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
      {isPending ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "enter",
          }}
        >
          <CircularProgress />
        </Box>
      ) : null}
      {data?.results?.map((item: any, index: number) => (
        <Card
          key={item.id}
          item={item.file}
          index={(page - 1) * 20 + index + 1}
        />
      ))}
      {!!data?.results?.length && (
        <Pagination
          count={data?.page_count}
          page={page}
          onChange={handlePageChange}
        />
      )}
      {data?.results?.length === 0 && <p>داده ای وجود ندارد</p>}
    </Box>
  );
};

export default Home;
