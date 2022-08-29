import { Grid } from '@mui/material';
import useUsersDetail from '../../Hooks/UsersDetail';
import UsersPage from '../Users/Users.page';


const MainPage = () => {

   const {isError,error,isLoading,data,isFetching} = useUsersDetail();

   if(isLoading) {
    return <h3>users loading ...</h3>
   }

   if(isError) {
    return <h3>{error.message}</h3>
   }


  console.log(data.data)
  return (
    <Grid>
        {
            data?.data.map((user) => (
                <UsersPage />
            ))
        }
    </Grid>
  )
}

export default MainPage