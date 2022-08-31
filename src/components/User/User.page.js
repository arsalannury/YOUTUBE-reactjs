import useUserDetail from "../../Hooks/UserDetail"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material";

const Userpage = () => {
  

const userParam = useParams();

const {error,isError,isLoading,data} = useUserDetail(userParam.id);

  if(isLoading) {
    return <h2>is Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <Box>
      <img alt="userImage" src={data?.data.data.avatar} />
    </Box>
    </>
  )
}

export default Userpage