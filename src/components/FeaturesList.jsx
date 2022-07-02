// ** Material UI Imports
import { Stack } from "@mui/material";

// ** User Components
import Feature from "./Feature";

// ** Styled Components
import { FeatureListWrapper } from "./styledComponents";

/**
 * @desc List of all instances of Feature Component
 * @example
 * <FeaturesList />
 * @return {ReactElement}
 */
const FeaturesList = () => {
  return (
    <FeatureListWrapper
      width={{ xs: "95%", lg: "77rem" }}
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={{ xs: "center", md: "normal" }}
      spacing={{ xs: 7, md: 0 }}
    >
      <Stack spacing={{ xs: 7, md: 10 }}>
        <Feature title={"Earn"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
          nam, temporibus, laborum odit iusto consectetur nesciunt obcaecati
        </Feature>
        <Feature title={"Borrow"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
          nam, temporibus, laborum odit iusto consectetur nesciunt obcaecati
        </Feature>
      </Stack>
      <Feature title={"Dividends"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus nam,
        temporibus, laborum odit iusto consectetur nesciunt obcaecati
      </Feature>
    </FeatureListWrapper>
  );
};

export default FeaturesList;
