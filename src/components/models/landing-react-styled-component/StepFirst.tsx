import styled from "styled-components";
import { useMemo } from "react";
import { StepCard } from "../../uis/react/StepCard";
import { steps } from "../../../functions/constants/steps";
import { BaseContainer } from "../../../functions/themes";

export const StepFirst = () => {
  const formatSteps = useMemo(() => {
    return [steps[0], steps[1], steps[2], steps[3]];
  }, []);
  return (
    <BaseContainer>
      <StepWrapper>
        {formatSteps.map((step, index) => (
          <StepCard step={step} key={index} />
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
