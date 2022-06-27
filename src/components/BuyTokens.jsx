import { Stack, Typography } from "@mui/material";
import { HatomButton } from "./styledComponents";

const BuyTokens = () => {
  return (
    <Stack
      mt={"2rem"}
      width={"60%"}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack direction={"column"}>
        <Stack direction={"row"} spacing={1}>
          <Typography
            fontFamily={"Neue Haas Grotesk Text Pro"}
            fontWeight={"bold"}
            variant="h5"
          >
            $9,449,627.26
          </Typography>
          <Typography
            fontFamily={"Neue Haas Grotesk Text Pro"}
            fontWeight={"bold"}
            variant="h5"
            color={"#179C64"}
          >
            Dividends
          </Typography>
        </Stack>
        <Typography
          fontFamily={"Neue Haas Grotesk Text Pro"}
          fontWeight={"bold"}
          fontSize={"13px"}
          textAlign={"left"}
          color={"#5c5c5c"}
          variant={"span"}
        >
          Paid out to Hatom Token Holders over 3 years
        </Typography>
      </Stack>
      <HatomButton variant="contained">Buy Hatom Token</HatomButton>
    </Stack>
  );
};

export default BuyTokens;
