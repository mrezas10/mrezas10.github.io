// ** Material UI Imports
import { Stack } from "@mui/material";

// ** Styled Components
import { StyledText } from "./styledComponents";

/**
 * @desc page Title React Component
 * @example
 * <HatomTitle />
 * @return {ReactElement}
 */
const HatomTitle = () => {
  return (
    <Stack position="absolute" top={"10rem"} zIndex={10}>
      <Stack maxHeight={"7rem"}>
        <StyledText color={"#3D906A"} fontSize={"5rem"}>
          Hatom Token
        </StyledText>
        <StyledText
          sx={{
            transform: "translate(-4px,-7.5rem)",
            filter: "drop-shadow(21px -6px 18px #7B7B7B)",
          }}
          color={"white"}
          fontSize={"5rem"}
        >
          Hatom Token
        </StyledText>
      </Stack>
      <StyledText
        color={"#3D906A"}
        fontSize={"1.2rem"}
        fontWeight={"normal !important"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </StyledText>
    </Stack>
  );
};

export default HatomTitle;
