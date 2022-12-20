import { FlexCard } from "../../uis/react/FlexCard";
import { stores } from "../../../functions/constants/stores";
import { BaseContainer } from "../../../functions/themes";

export const Store = () => {
  return (
    <BaseContainer className="-white">
      {stores.map((store, index) => (
        <FlexCard card={store} key={index} />
      ))}
    </BaseContainer>
  );
};
