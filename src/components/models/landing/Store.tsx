import styled from "styled-components";
import { FlexCard } from "./FlexCard";
import { recommends } from "../../../functions/constants/recommends";

export const Store = () => {
  return (
    <>
      {recommends.map((recommend) => (
        <FlexCard card={recommend}></FlexCard>
      ))}
    </>
  );
};
