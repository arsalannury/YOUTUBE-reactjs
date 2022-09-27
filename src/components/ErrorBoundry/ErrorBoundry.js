import { Button, Typography } from "@mui/material";

const ErrorBoundry = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <img src="error.gif" style={{ width: "400px", height: "450px" }} />
      <div>
        <Typography>data can not be loaded...</Typography>
        <Typography>please chek your internet connection</Typography>
        <Button variant="outlined" sx={{margin:"10px"}} onClick={() => window.location.reload()}>Reload page</Button>
      </div>
    </div>
  );
};

export default ErrorBoundry;
