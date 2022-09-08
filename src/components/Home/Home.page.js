import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Button
        variant={"contained"}
        sx={{
          backgroundColor: "#7209b7",
          "&:hover": {
            backgroundColor: "#3c096c",
          },
        }}
      >
        <Link style={{ all: "unset" }} to={"/games-page"}>
          enjoy games world
        </Link>
      </Button>
    </>
  );
};

export default HomePage;
