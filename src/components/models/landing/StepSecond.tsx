import styled from "styled-components";
import { useMemo } from "react";
import { StepCard } from "../../uis/StepCard";
import { steps } from "../../../functions/constants/steps";
import { BaseContainer } from "../../../functions/themes";

export const StepSecond = () => {
  const formatSteps = useMemo(() => {
    return [steps[4], steps[5], steps[6], steps[7]];
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
