// ** Material UI Styled Import
import { styled } from "@mui/system";

// ** Material UI Imports
import { Box, Input, Button, Table } from "@mui/material";
import { Close } from "@mui/icons-material";

// React Router Imports
import { Link } from "react-router-dom";

export const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  background: "rgba(255, 255, 255, 0.12)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.8px)",
  gap: "1rem",
});

export const FormInput = styled(Input)({
  height: "3rem",
  borderRadius: 3,
  background: "#ffffff",
});

export const FormButton = styled(Button)({
  fontFamily: "Lobster",
  fontSize: "1.5rem",
  textTransform: "none",
  filter: "contrast(300%)",
});

export const UnStyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

export const HistoryTable = styled(Table)({
  addingBottom: "2rem",
  background: "rgba(255, 255, 255, 0.07)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.8px)",
});

export const CustomClose = styled(Close)({
  color: "#ffffff",
  fontSize: "2rem",
  position: "absolute",
  top: "-2rem",
  right: "1rem",
});
