import styled from "styled-components";
import { BaseTitle } from "../../functions/themes/BaseTitle";
import { BaseText } from "../../functions/themes/BaseText";

export type ComboTitleProps = {
  headline: string;
  title: string;
};
export const ComboTitle: React.FC<ComboTitleProps> = ({ headline, title }) => {
  return (
    <Block>
      <Headline>{headline}</Headline>
      <BaseTitle className="-sub">{title}</BaseTitle>
    </Block>
  );
};

const Block = styled.div`
  display: grid;
  gap: 10px;
  text-align: center;
`;
const Headline = styled(BaseText)`
  width: fit-content;
  margin: auto;
  border-bottom: 1px solid black;
`;
