import styled from "styled-components";
import { useMemo } from "react";
import { StepCard } from "./StepCard";
import { steps } from "../../../functions/constants/steps";

export const StepSecond = () => {
  const formatSteps = useMemo(() => {
    return [steps[4], steps[5], steps[6], steps[7]];
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
