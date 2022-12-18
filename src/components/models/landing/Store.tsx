import { FlexCard } from "./FlexCard";
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
