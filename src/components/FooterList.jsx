// ** Material UI Imports
import { Stack } from "@mui/material";

// ** Styled Components
import { StyledText } from "./styledComponents";

/**
 * @desc List for the Footer Section
 * @example
 * <FooterList title={""}>...</FooterList>
 * @param {object} props - React Properties
 * @param {string} props.title - title for the footer List
 * @param {ReactElement} props.children - inner list Components as react children
 * @return {ReactElement}
 */
const FooterList = ({ title, children }) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"flex-start"}
      spacing={5}
      pl={"2rem"}
      py={{ xs: "2rem", md: 0 }}
      width={{ xs: "45vw", md: "unset" }}
    >
      <StyledText color={"#ffffff"} fontSize={"1.2rem"}>
        {title}
      </StyledText>
      {children}
    </Stack>
  );
};

export default FooterList;
