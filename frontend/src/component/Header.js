import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from '../images/jobs.jpg';

const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    minHeight: 400,
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main,
    blur: "2px",
  }));
  return (
    <>
      <StyleHeader></StyleHeader>
    </>
  );
};

export default Header;
