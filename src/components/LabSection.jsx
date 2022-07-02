// ** Styled Components
import { LabSectionStyled, Background, OverLay } from "./styledComponents";

/**
 * @desc LabSection Container React Component
 * @example
 * <LabSection>...</LabSection>
 * @param {object} props - React Properties
 * @param {ReactElement} props.children - inner components as react children
 * @return {ReactElement}
 */
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
