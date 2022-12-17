import styled, { css } from "styled-components";
import { BaseTitle } from "../../functions/themes/BaseTitle";
import { BaseText } from "../../functions/themes/BaseText";

export type ComboTitleProps = {
  headline: string;
  title: string;
  shouldLeft?: boolean;
};
export const ComboTitle: React.FC<ComboTitleProps> = ({
  headline,
  title,
  shouldLeft = false,
}) => {
  return (
    <Block shouldLeft={shouldLeft}>
      <Headline shouldLeft={shouldLeft}>{headline}</Headline>
      <BaseTitle className="-sub">{title}</BaseTitle>
    </Block>
  );
};

const Block = styled.div<{ shouldLeft: boolean }>`
  display: grid;
  gap: 10px;
  text-align: center;
  ${(props) =>
    props.shouldLeft &&
    css`
      text-align: left;
    `}
`;

const Headline = styled(BaseText)<{ shouldLeft: boolean }>`
  width: fit-content;
  margin: auto;
  border-bottom: 1px solid black;
  ${(props) =>
    props.shouldLeft &&
    css`
      margin: inherit;
    `}
`;
