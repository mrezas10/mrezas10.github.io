import { Stack, Typography } from "@mui/material";
import BuyTokens from "./BuyTokens";
import FeaturesList from "./FeaturesList";

const Features = () => {
  return (
    <Stack id="Features" width={"100vw"} alignItems={"center"} spacing={8}>
      <BuyTokens />
      <Typography
        width={"80%"}
        textAlign="left"
        fontFamily={"Neue Haas Grotesk Text Pro"}
        variant="h4"
      >
        <span style={{ color: "#3555f7" }}>Features </span>
        of Hatom Protocol
      </Typography>
      <FeaturesList />
    </Stack>
  );
};

export default Features;
