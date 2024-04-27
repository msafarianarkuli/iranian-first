import { Box, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode; sx?: SxProps }> = ({
  children,
  sx,
}) => {
  return (
    <Box
      maxWidth="lg"
      sx={{
        border: "1px solid #F1F1F1",
        borderRadius: "16px",
        margin: "auto",
        padding: "16px",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
export default Container;
