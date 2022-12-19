import { FlexCard } from "../../uis/react/FlexCard";
import { recommends } from "../../../functions/constants/recommends";
import { BaseContainer } from "../../../functions/themes";

export const Recommend = () => {
  return (
    <BaseContainer className="-white">
      {recommends.map((recommend, index) => (
        <BaseContainer className="-white" key={index}>
          <FlexCard card={recommend} />
        </BaseContainer>
      ))}
    </BaseContainer>
  );
};
