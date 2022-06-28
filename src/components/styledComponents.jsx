// ** Material UI Imports
import { styled } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";

// ** Media Imports
import bg from "../bg.svg";
import bgMobile from "../bg-mobile.png";
import overlight from "../over-light.svg";
import coinsequence from "../coin-sequence.png";
import linesLarge from "../lines-large.svg";
import linesMedium from "../lines-medium.svg";
import linesMobile from "../lines-mobile.svg";

// ** Background for Lab Section
export const Background = styled("div")({
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "90rem",
  position: "absolute",
  top: 0,
  "@media screen and (max-width:900px)": {
    height: "80rem",
    backgroundImage: `url(${bgMobile})`,
  },
});

// ** Lab Section Wrapper Styles
export const LabSectionStyled = styled("div")({
  width: "100vw",
  height: "90rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:900px)": {
    height: "80rem",
  },
});

// ** Lab Section Tube Overlay
export const OverLay = styled("div")({
  width: "100vw",
  height: "90rem",
  backgroundImage: `url(${overlight})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "absolute",
  top: 0,
  zIndex: 5,
  "@media screen and (max-width:900px)": {
    height: "80rem",
    backgroundImage: "none",
  },
});

// ** Coin Styles
export const Coin = styled("div")({
  transform: "translate(2.5vw, 50px) scale(0.65)",
  width: "400px",
  height: "400px",
  backgroundImage: `url(${coinsequence})`,
  backgroundRepeat: "no-repeat",
  "@media screen and (max-width:1200px)": {
    transform: "translate(2.5vw, 50px) scale(0.55)",
  },
  "@media screen and (max-width:900px)": {
    transform: "translate(2.5vw, 70px) scale(0.45)",
  },
});

export const HatomButton = styled(Button)({
  borderRadius: "7px",
  textTransform: "none",
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontSize: "1.1rem",
  background: "rgb(27,67,71)", // eslint-disable-next-line
  background:
    "linear-gradient(270deg, rgba(27,67,71,1) 0%, rgba(61,144,106,1) 100%)",
  height: "3.5rem",
});
export const FeaturesWrapper = styled(Stack)({
  "@media screen and (max-width: 900px)": {
    backgroundImage: `url(${linesMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto auto",
    backgroundPosition: "center 18rem",
  },
});
export const FeatureListWrapper = styled(Stack)({
  backgroundImage: `url(${linesLarge})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto auto",
  backgroundPosition: "11rem 1.2rem",
  "@media screen and (max-width: 1200px)": {
    backgroundSize: "36rem auto",
    backgroundPosition: "14vw 2rem",
  },
  "@media screen and (max-width: 1150px)": {
    backgroundImage: `url(${linesMedium})`,
    backgroundSize: "28rem auto",
    backgroundPosition: "17vw 2rem",
  },
  "@media screen and (max-width: 900px)": {
    backgroundImage: "none",
  },
});

export const StyledText = styled(Typography)({
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontWeight: "bold",
});

export const HeaderText = styled(Typography)({
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#ffffff",
});

export const HeaderLogo = styled("img")({
  //
});

export const AppButtonBorder = styled("div")({
  //
  borderRadius: "7px",
  maxWidth: "fit-content",
  maxHeight: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1px",
  background:
    "linear-gradient(90deg, rgba(53,85,247,1) 0%, rgba(0,77,0,1) 52%, rgba(0,77,0,1) 100%)",
});

export const AppButtonContained = styled(Button)({
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontWeight: "bold",
  width: "5rem",
  height: "3rem",
  textTransform: "none",
  color: "white",
  borderRadius: "7px",
  background: "rgb(0,77,0)", // eslint-disable-next-line
  background: "linear-gradient(90deg, rgba(0,77,0,1) 0%, rgba(1,48,30,1) 100%)",
});
