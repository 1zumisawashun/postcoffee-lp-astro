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
      <div>
        <img src={media.image} alt={media.name} />
      </div>
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