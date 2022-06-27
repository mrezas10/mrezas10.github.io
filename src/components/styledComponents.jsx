// ** Material UI Imports
import { styled } from "@mui/system";
import { Button, Stack } from "@mui/material";

// ** Media Imports
import bg from "../bg.svg";
import overlight from "../over-light.svg";
import coinsequence from "../coin-sequence.png";

// ** Background for Lab Section
export const Background = styled("div")({
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "75vw",
  position: "absolute",
  top: 0,
});

// ** Lab Section Wrapper Styles
export const LabSectionStyled = styled("div")({
  width: "100vw",
  height: "75vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// ** Lab Section Tube Overlay
export const OverLay = styled("div")({
  width: "100vw",
  height: "75vw",
  backgroundImage: `url(${overlight})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "absolute",
  top: 0,
  zIndex: 100,
});

// ** Coin Styles
export const Coin = styled("div")({
  transform: "translate(3.5vw, 50px) scale(0.65)",
  width: "400px",
  height: "400px",
  backgroundImage: `url(${coinsequence})`,
  backgroundRepeat: "no-repeat",
});

export const HatomButton = styled(Button)({
  borderRadius: "10px",
  textTransform: "none",
  fontFamily: "Neue Haas Grotesk Text Pro",
  background: "rgb(27,67,71)",
  background:
    "linear-gradient(270deg, rgba(27,67,71,1) 0%, rgba(61,144,106,1) 100%)",
  height: "3rem",
});

export const FeatureWrapper = styled(Stack)({
  //
});
