import styled from "styled-components";
import { useMemo } from "react";
import { StepCard } from "./StepCard";
import { steps } from "../../../functions/constants/steps";

export const StepFirst = () => {
  const formatSteps = useMemo(() => {
    return [steps[0], steps[1], steps[2], steps[3]];
  }, []);
  return (
    <StepContainer>
      <StepWrapper>
        {formatSteps.map((step) => (
          <StepCard step={step}></StepCard>
        ))}
      </StepWrapper>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
`;
const StepWrapper = styled.div`
  width: 90%;
  padding: 5% 0;
  display: flex;
  margin: auto;
  gap: 2%;
`;
