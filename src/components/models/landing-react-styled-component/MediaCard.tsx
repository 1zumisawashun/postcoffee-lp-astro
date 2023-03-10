import styled from "styled-components";
import { BaseTitle } from "../../../functions/themes";
import type { Media } from "../../../functions/types/Media";

export type MediaCardProps = {
  media: Media;
};

export const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
  return (
    <GapWrapper>
      <BaseTitle>{media.headline}</BaseTitle>
      <BaseTitle className="-sub">{media.text}</BaseTitle>
      <Line></Line>
      <ImageWrapper>
        <StyledImage src={media.image} alt={media.name} loading="lazy" />
      </ImageWrapper>
    </GapWrapper>
  );
};

const GapWrapper = styled.div`
  display: inline-grid;
  gap: 10px;
`;
const Line = styled.div`
  border-right: 1px solid black;
  width: 50%;
  height: 50px;
`;
const ImageWrapper = styled.div`
  width: 30%;
  margin: auto;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
