// ** Styled Components
import { LabSectionStyled, Background, OverLay } from "./styledComponents";

// ** Lab Section
const LabSection = ({ children }) => {
  return (
    <LabSectionStyled>
      <Background></Background>
      <OverLay></OverLay>
      {children}
    </LabSectionStyled>
  );
};

export default LabSection;
