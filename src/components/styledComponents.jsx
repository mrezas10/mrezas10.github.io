// ** Material UI Imports
import { styled } from "@mui/system";
import { Button, Input, Stack, Typography } from "@mui/material";

// ** Media Imports
import bg from "../media/bg.svg";
import bgMobile from "../media/bg-mobile.png";
import overlight from "../media/over-light.svg";
import coinsequence from "../media/coin-sequence.png";
import linesLarge from "../media/lines-large.svg";
import linesMedium from "../media/lines-medium.svg";
import linesMobile from "../media/lines-mobile.svg";

/**
 * @desc Background for Lab Section
 * @example
 * <Background></Background>
 */
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

/**
 * @desc Lab Section Wrapper Styles
 * @example
 * <LabSectionStyled>...</LabSectionStyled>
 */
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

/**
 * @desc Lab Section Tube Overlay
 * @example
 * <OverLay></OverLay>
 */
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

/**
 * @desc Coin Styles
 * @example
 * <Coin></Coin>
 */
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

/**
 * @desc Custom button for the main page
 * @example
 * <HatomButton variant="contained">...</HatomButton>
 */
export const HatomButton = styled(Button)({
  borderRadius: "7px",
  textTransform: "none",
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontSize: "1.1rem",
  color: "#ffffff",
  background: "rgb(27,67,71)", // eslint-disable-next-line
  background:
    "linear-gradient(270deg, rgba(27,67,71,1) 0%, rgba(61,144,106,1) 100%)",
  height: "3.5rem",
});

/**
 * @desc Features Section Wrapper
 * @example
 * <FeaturesWrapper direction="column">...</FeaturesWrapper>
 */
export const FeaturesWrapper = styled(Stack)({
  "@media screen and (max-width: 900px)": {
    backgroundImage: `url(${linesMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto auto",
    backgroundPosition: "center 18rem",
  },
});

/**
 * @desc Features List Wrapper
 * @example
 * <FeaturesListWrapper direction="row">...</FeaturesListWrapper>
 */
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

/**
 * @desc Styled Text Component
 * @example
 * <StyledText color="" variant="" fontSize=""></StyledText>
 */
export const StyledText = styled(Typography)({
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontWeight: "bold",
});

/**
 * @desc Header Text Component
 * @example
 * <HeaderText variant="" fontSize=""></HeaderText>
 */
export const HeaderText = styled(Typography)({
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#ffffff",
});

/**
 * @desc Header Logo Styled
 * @example
 * <HeaderLogo src={""}/>
 */
export const HeaderLogo = styled("img")({
  maxHeight: "10rem",
});

/**
 * @desc App Button Gradient Border
 * @example
 * <AppButtonBorder>...</AppButtonBorder>
 */
export const AppButtonBorder = styled("div")({
  borderRadius: "7px",
  maxWidth: "fit-content",
  maxHeight: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1px",
  background:
    "linear-gradient(90deg, rgba(53,85,247,1) 0%, rgba(0,77,0,1) 52%, rgba(0,77,0,1) 100%)",
});

/**
 * @desc App Button
 * @example
 * <AppButton>...</AppButton>
 */
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

// ** Newsletter Wrapper
/**
 * @desc Newsletter Wrapper
 * @example
 * <NewsWrapper direction="column">...</NewsWrapper>
 */
export const NewsWrapper = styled(Stack)({
  background: "rgb(38,91,92)", //eslint-disable-next-line
  background:
    "linear-gradient(90deg, rgba(38,91,92,1) 0%, rgba(17,86,107,1) 100%)",
  width: "100vw",
  minHeight: "10rem",
  marginTop: "3rem",
  padding: "5rem 0",
});

/**
 * @desc Newsletter Input Wrapper
 * @example
 * <InputWrapper direction="row">...</InputWrapper>
 */
export const InputWrapper = styled(Stack)({
  padding: "10px",
  direction: "row",
  borderRadius: "10px",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#315B82",
});

/**
 * @desc Styled Input for Newsletter
 * @example
 * <NewsWrapper disableUnderline value="" onChange=""/>
 */
export const NewsInput = styled(Input)({
  fontSize: "1.3rem",
  padding: "0 1rem",
  color: "white",
});

/**
 * @desc Footer Wrapper
 * @example
 * <FooterWrapper direction="row">...</FooterWrapper>
 */
export const FooterWrapper = styled(Stack)({
  padding: "10rem 0",
  background: "#031222",
  width: "100vw",
  minHeight: "10rem",
  justifyContent: "space-around",
  flexWrap: "wrap",
  "@media screen and (max-width: 900px)": {
    justifyContent: "normal",
  },
});

/**
 * @desc Footer Logo Styled
 * @example
 * <HeaderLogo src={""}/>
 */
export const FooterLogo = styled("img")({
  width: "4rem",
  height: "4rem",
  "@media screen and (max-width: 900px)": {
    padding: "2rem",
  },
});

// ** Footer List Item
/**
 * @desc Footer List item
 * @example
 * <FooterListItem></FooterListItem>
 */
export const FooterListItem = styled(Typography)({
  fontFamily: "Neue Haas Grotesk Text Pro",
  fontSize: "1rem",
  fontWeight: "normal",
  color: "#6A7DAA",
});
