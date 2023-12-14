import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lightsOnCount,
  turnAllLightsOff,
  turnAllLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnAllLightsOff()}
        disabled={lightsOnCount === 0}
      >
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnAllLightsOn()}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
