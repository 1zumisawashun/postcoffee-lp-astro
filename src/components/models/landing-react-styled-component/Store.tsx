import { FlexCard } from "../../uis/react/FlexCard";
import { stores } from "../../../functions/constants/stores";
import { BaseContainer } from "../../../functions/themes";

export const Store = () => {
  return (
    <>
      {stores.map((store) => (
        <BaseContainer className="-white">
          <FlexCard card={store} />
        </BaseContainer>
      ))}
    </>
  );
};
