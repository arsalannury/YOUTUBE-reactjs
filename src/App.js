import "./app.css";
import Rive from "rive-react";
import {useRive , useStateMachineInput} from 'rive-react';


function App() {

  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME = "Hit";
  const INPUT_NAME_IN = "In"

  const {rive,RiveComponent} = useRive({
    src: "zombie-character.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true
  })

  const onClickInput = useStateMachineInput(rive,STATE_MACHINE_NAME,INPUT_NAME);
  const onContextMenuClickInput = useStateMachineInput(rive,STATE_MACHINE_NAME,INPUT_NAME_IN)

  return(
    <>
  <RiveComponent style={{width:"1000px",height:"700px"}} onClick={() => onClickInput.fire()} onContextMenu={(e) => {
   e.preventDefault();
   onContextMenuClickInput.fire();
  }} />
    </>
  )

}

export default App;
