// ** Material UI Imports
import { Stack } from "@mui/material";

// ** User Components
import BuyTokens from "./BuyTokens";
import FeaturesList from "./FeaturesList";
import FeaturesTitle from "./FeaturesTitle";

// ** Styled Components
import { FeaturesWrapper } from "./styledComponents";

// ** Features Section
const Features = () => {
  return (
    <FeaturesWrapper
      id="Features"
      width={"100vw"}
      alignItems={"center"}
      spacing={6}
      direction={{ xs: "column-reverse", md: "column" }}
    >
      <BuyTokens />
      <Stack
        pt={{ xs: "22rem", md: 0 }}
        width={"100vw"}
        spacing={6}
        alignItems={"center"}
      >
        <FeaturesTitle />
        <FeaturesList />
      </Stack>
    </FeaturesWrapper>
  );
};

export default Features;
