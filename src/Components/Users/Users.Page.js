import { Box, CircularProgress } from "@mui/material";
import useUsers from "../../Hooks/getUsersHook";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";


const UsersPage = () => {
  const CustumPaper = styled(Paper)(({ theme }) => ({
    boxShadow: theme.shadows[16],
    height: "90vh",
    width: "90vw",
  }));

  const { isLoading, data, isError, error, isFetching } = useUsers();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <CustumPaper>
        {data?.data.map((user) => (
          <>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                margin: "20px",
                listStyleType: "none",
              }}
            >
              <Box style={{ borderBottom: "1px solid #aaa", width: "100%" }}>
                <li><Link to={`/users/${user.id}`}>{user.username}</Link></li>
              </Box>
              <Box style={{ borderBottom: "1px solid #aaa", width: "100%" }}>
                <li>{user.password}</li>
              </Box>
              <Box style={{ borderBottom: "1px solid #aaa", width: "100%" }}>
                <li>{user.phone}</li>
              </Box>
            </ul>
          </>
        ))}
      </CustumPaper>
    </>
  );
};

export default UsersPage;
