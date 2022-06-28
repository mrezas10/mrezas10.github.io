import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useWindowWidth } from "@react-hook/window-size";
import {
  AppButtonBorder,
  AppButtonContained,
  HeaderLogo,
  HeaderText,
} from "./styledComponents";
import Logo from "../logo.svg";

const HatomHeader = () => {
  const width = useWindowWidth();
  return (
    <Stack
      position={"absolute"}
      top={0}
      zIndex={100}
      width={{ xs: "90vw", md: "70vw" }}
      height={{ xs: "5rem", md: "7rem" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems="center"
      color={"white"}
    >
      <Stack>
        <HeaderLogo src={Logo} />
      </Stack>
      {width > 900 && (
        <Stack direction={"row"} spacing={2}>
          <HeaderText>Market</HeaderText>
          <HeaderText>Governance</HeaderText>
          <HeaderText>Prices</HeaderText>
          <HeaderText>Docs</HeaderText>
          <HeaderText
            color={"#3555F7 !important"}
            borderBottom={"1px solid #3555F7"}
          >
            Hatom Token
          </HeaderText>
        </Stack>
      )}
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        fontSize={"2rem"}
      >
        <AppButtonBorder variant="contained">
          <AppButtonContained>App</AppButtonContained>
        </AppButtonBorder>
        {width < 900 && <MenuIcon color="inherit" fontSize="inherit" />}
      </Stack>
    </Stack>
  );
};

export default HatomHeader;
