// ** Material UI Imports
import { Stack } from "@mui/material";

// ** Styled Components
import {
  HatomButton,
  InputWrapper,
  NewsInput,
  NewsWrapper,
  StyledText,
} from "./styledComponents";

// ** React width Hook
import { useWindowWidth } from "@react-hook/window-size";

// ** NewsLetter section
const NewsLetter = () => {
  const width = useWindowWidth();
  return (
    <NewsWrapper spacing={4}>
      <Stack>
        <StyledText color={"#ffffff"} fontSize={"3rem"}>
          Subscribe to Hatom newsletter
        </StyledText>
        <StyledText
          color={"#C4D3EA"}
          fontSize={"1.5rem"}
          fontWeight={"normal !important"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </StyledText>
      </Stack>
      <InputWrapper
        direction={"row"}
        width={{ xs: "25rem", md: "40rem" }}
        alignSelf={"center"}
      >
        <NewsInput placeholder="Enter your Email" disableUnderline />
        {width > 900 && <HatomButton>Subscribe</HatomButton>}
      </InputWrapper>
      {width < 900 && (
        <Stack width={"10rem"} alignSelf="center">
          <HatomButton>Subscribe</HatomButton>
        </Stack>
      )}
    </NewsWrapper>
  );
};

export default NewsLetter;
