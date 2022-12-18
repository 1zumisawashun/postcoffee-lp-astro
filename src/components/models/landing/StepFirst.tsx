import styled from "styled-components";
import { useMemo } from "react";
import { StepCard } from "./StepCard";
import { steps } from "../../../functions/constants/steps";
import { BaseContainer } from "../../../functions/themes";

export const StepFirst = () => {
  const formatSteps = useMemo(() => {
    return [steps[0], steps[1], steps[2], steps[3]];
  }, []);
  return (
    <BaseContainer>
      <StepWrapper>
        {formatSteps.map((step) => (
          <StepCard step={step} />
        ))}
      </StepWrapper>
    </BaseContainer>
  );
};

const StepWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  gap: 2%;
`;
