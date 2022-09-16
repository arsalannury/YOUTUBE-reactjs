import {
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useMutationPostData } from "../../hooks/useMutation";

const AddGamePage = () => {
  const [newGame, addNewGame] = useState({
    title: "",
    players: "",
    firstSeason: ""
  });

  const disabledAddBtn = newGame.firstSeason.length > 1 && newGame.title.length > 1 & newGame.players.length > 1;

  const { mutateAsync,isSuccess,isError,isLoading } = useMutationPostData();

  const handleChangeInputs = ({ currentTarget: input }) => {
    console.log(input.value);
    const shallowState = { ...newGame };
    shallowState[input.name] = input.value;
    addNewGame(shallowState);
  };

  const handleAddData = async() => {
   const data = await mutateAsync(newGame);
   console.log(data)
    addNewGame({
        title: "",
        players: "",
        firstSeason: ""
    })
    if(isError) {
        return <h2>data can not send , check your internet connection</h2>
    }
    if(isLoading) {
        return <CircularProgress />
    }
    if(isSuccess) {
        alert("test")
    }
  }

 

  return (
    <>
      <form
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            name="title"
            value={newGame.title}
            onChange={(event) => handleChangeInputs(event)}
            type="text"
          />
          <FormHelperText>name of game</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="players">Players</InputLabel>
          <Input
            name="players"
            value={newGame.players}
            onChange={(event) => handleChangeInputs(event)}
            type="number"
          />
          <FormHelperText>1M or more...</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="firstSeason">First Season</InputLabel>
          <Input
            name="firstSeason"
            value={newGame.firstSeason}
            onChange={(event) => handleChangeInputs(event)}
            type="text"
          />
          <FormHelperText>date build</FormHelperText>
        </FormControl>
      </form>
      <Button onClick={handleAddData} disabled={disabledAddBtn ? false : true} >Add Game</Button>
    </>
  );
};

export default AddGamePage;
