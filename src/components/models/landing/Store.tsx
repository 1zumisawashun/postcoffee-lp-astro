import styled from "styled-components";
import { FlexCard } from "./FlexCard";
import { stores } from "../../../functions/constants/stores";

export const Store = () => {
  return (
    <>
      {stores.map((store) => (
        <FlexCard card={store}></FlexCard>
      ))}
    </>
  );
};
