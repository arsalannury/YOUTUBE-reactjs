import useUserDetail from "../../Hooks/UserDetail"
import { useParams } from "react-router-dom"

const Userpage = () => {

const {error,isError,isLoading,data} = useUserDetail();



  return (
    <div>User.page</div>
  )
}

export default Userpage