import { Box, Button, Divider, Typography } from "@mui/material";
import Container from "../containers/Container";
import { FC } from "react";

type Card = {
  item: any;
  index: number;
};

export const Card: FC<Card> = ({ item, index }) => {
  let mydate = item && new Date(+item.created_date);
  let mypersiandate = mydate.toLocaleDateString("fa-IR");

  return (
    <Container sx={{ mt: "30px" }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <Typography variant="subtitle2">ردیف: {index}</Typography>
            <Typography variant="subtitle2">
              تاریخ تشکیل: {mypersiandate}
            </Typography>
          </Box>
          <Button variant="contained">ورود به صفحه پرونده</Button>
        </Box>
        <Divider sx={{ my: "14px" }} />
        <Box
          sx={{ display: "flex", gap: "200px", alignItems: "center" }}
          mb={4}
        >
          <Typography variant="subtitle2">پرونده: {item.file_code}</Typography>
          <Typography variant="subtitle2">
            نوع پرونده: {item.file_type.fa_name}
          </Typography>
          <Typography variant="subtitle2">
            شعبه: {item?.branch?.name}
          </Typography>
          <Typography variant="subtitle2">
            {" "}
            {item?.visit_province?.name}-{item?.visit_county?.name}{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "100px" }}>
          <Box sx={{ borderLeft: "2px solid #EAEAEA" }} padding={2}>
            <Typography variant="subtitle1">نام بیمه گذار</Typography>
            <Typography variant="subtitle1">
              {item?.insurer_full_name}
            </Typography>
          </Box>
          <Box sx={{ borderLeft: "2px solid #EAEAEA" }} padding={2}>
            <Typography variant="subtitle1">شاخه بیمه</Typography>
            <Typography variant="subtitle1">
              {item?.insurance_section?.name}
            </Typography>
          </Box>
          <Box sx={{ borderLeft: "2px solid #EAEAEA" }} padding={2}>
            <Typography variant="subtitle1">ارزیاب</Typography>
            <Typography variant="subtitle1">
              {item?.adjuster?.full_name}
            </Typography>
          </Box>
          <Box sx={{ borderLeft: "2px solid #EAEAEA" }} padding={2}>
            <Typography variant="subtitle1">نوع بیمه نامه</Typography>
            <Typography variant="subtitle1">
              {item?.insurance_type?.name}
            </Typography>
          </Box>
          <Box sx={{ borderLeft: "2px solid #EAEAEA" }} padding={2}>
            <Typography variant="subtitle1">شعبه بیمه گر</Typography>
            <Typography variant="subtitle1">
              {item?.insurance_branch?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Card;
