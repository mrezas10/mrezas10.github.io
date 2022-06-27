import { Stack } from "@mui/material";
import { HatomButton, StyledText } from "./styledComponents";

const BuyTokens = () => {
  return (
    <Stack
      mt={"2rem"}
      width={{ xs: "50%", md: "52rem" }}
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems="center"
      spacing={{ xs: 4, md: 0 }}
    >
      <Stack direction={"column"}>
        <Stack direction={"row"} spacing={1}>
          <StyledText fontSize={{ xs: "1.6rem", md: "2.2rem" }}>
            $9,449,627.26
          </StyledText>
          <StyledText
            fontSize={{ xs: "1.6rem", md: "2.2rem" }}
            color={"#179C64"}
          >
            Dividends
          </StyledText>
        </Stack>
        <StyledText
          fontSize={{ xs: ".9rem", md: "1.15rem" }}
          textAlign={"left"}
          color={"#5c5c5c"}
          variant={"span"}
        >
          Paid out to Hatom Token Holders over 3 years
        </StyledText>
      </Stack>
      <HatomButton variant="contained">Buy Hatom Token</HatomButton>
    </Stack>
  );
};

export default BuyTokens;
