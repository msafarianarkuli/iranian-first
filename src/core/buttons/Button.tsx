import { Button, ButtonProps } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { FC } from "react";

interface ICustomButton {
  sx?: SxProps;
  text: string;
}

const CustomButton: FC<ICustomButton & ButtonProps> = ({ text, ...rest }) => {
  return (
    <Button variant="contained" fullWidth sx={rest.sx} {...rest}>
      {text}
    </Button>
  );
};

export default CustomButton;
