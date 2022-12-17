import styled from "styled-components";
import { FlexCard } from "./FlexCard";
import { recommends } from "../../../functions/constants/recommends";

export const Customize = () => {
  return (
    <>
      {recommends.map((recommend) => (
        <FlexCard card={recommend}></FlexCard>
      ))}
    </>
  );
};
