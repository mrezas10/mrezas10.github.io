// ** Material UI Imports
import { Stack } from "@mui/material";

// ** Styled Components
import {
  AppButtonBorder,
  AppButtonContained,
  FooterListItem,
  FooterLogo,
  FooterWrapper,
} from "./styledComponents";

// ** User Components
import FooterList from "./FooterList";

// ** Footer Logo
import Logo from "../media/logo-footer.png";

// ** React Width Hook
import { useWindowWidth } from "@react-hook/window-size";

// ** Footer Section
const HatomFooter = () => {
  const width = useWindowWidth();
  return (
    <FooterWrapper direction={"row"}>
      <Stack width={{ xs: "100vw", md: "unset" }}>
        <FooterLogo src={Logo} />
      </Stack>
      <FooterList title={"Protocol"}>
        <FooterListItem>Markets</FooterListItem>
        <FooterListItem>Prices</FooterListItem>
        <FooterListItem>Docs</FooterListItem>
      </FooterList>
      <FooterList title={"Governance"}>
        <FooterListItem>Overview</FooterListItem>
        <FooterListItem>Hatom Token</FooterListItem>
      </FooterList>
      <FooterList title={"Security"}>
        <FooterListItem>Audits</FooterListItem>
        <FooterListItem>Formal Verification</FooterListItem>
        <FooterListItem>Economy Security</FooterListItem>
        <FooterListItem>Bug Bounty</FooterListItem>
      </FooterList>
      {width > 900 && (
        <AppButtonBorder>
          <AppButtonContained>App</AppButtonContained>
        </AppButtonBorder>
      )}
    </FooterWrapper>
  );
};

export default HatomFooter;
