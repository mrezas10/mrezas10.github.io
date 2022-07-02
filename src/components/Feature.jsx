// ** Material UI Imports
import { Stack, Typography } from "@mui/material";

// ** Styled Components
import { StyledText } from "./styledComponents";

/**
 * @desc Feature component for Features Section
 * @example
 * <Feature title={""}>...</Feature>
 * @param {object} props - React Properties
 * @param {string} props.title - title for the feature
 * @param {ReactElement} props.children - inner text as react children
 * @return {ReactElement}
 */
const Feature = ({ title, children }) => {
  return (
    <Stack
      alignItems={{ xs: "center", md: "flex-start" }}
      width={{ xs: "15rem", lg: "20rem" }}
      spacing={3}
    >
      <StyledText fontSize={{ xs: "2rem", md: "1.8rem", lg: "2.2rem" }}>
        {title}
      </StyledText>
      <Typography
        textAlign={{ xs: "center", md: "left" }}
        variant="span"
        fontSize={{ xs: ".8rem", lg: "1rem" }}
        color={"#5c5c5c"}
        fontFamily={"Neue Haas Grotesk Text Pro"}
        letterSpacing={".12rem"}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default Feature;
