import { useRive, useStateMachineInput } from "rive-react";

export default function ZombieRive() {
  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME_HIT = "Hit";
  const INPUT_NAME_IN = "In";

  const { rive, RiveComponent } = useRive({
    src: "zombie-character.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME_HIT
  );

  const onContextMenuInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME_IN
  );

  return (
    <>
      <RiveComponent
        onClick={() => onClickInput.fire()}
        onContextMenu={(event) => {
          event.preventDefault();
          onContextMenuInput.fire();
        }}
        style={{ width: "400px", height: "400px" }}
      />
    </>
  );
}
