// ** Styled Components
import { StyledText } from "./styledComponents";

// ** Features Title Component
const FeaturesTitle = () => {
  return (
    <StyledText
      pt={"3rem"}
      width={{ xs: "40%", md: "95%", lg: "77rem" }}
      textAlign={{ xs: "center", md: "left" }}
      fontSize={{ xs: "1.8rem", md: "2.5rem" }}
    >
      <span style={{ color: "#3555f7" }}>Features </span>
      of Hatom Protocol
    </StyledText>
  );
};

export default FeaturesTitle;
