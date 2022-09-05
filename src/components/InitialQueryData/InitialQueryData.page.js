import { useGameData } from "../../Hooks/InitialQueryDataDetail"
import { useParams } from "react-router-dom"

const InitialQueryDataPage = () => {
const gameId = useParams();

const {isError,isLoading,data,error} = useGameData(gameId.id);

// if(isLoading) {
//     return <h1>is Loading ...</h1>
// }
if(isError) {
    return <h1>{error.message}</h1>
}
console.log(data);
  return (
    <>
    <p>{data?.data.name}</p>
    <p>{data?.data.age}</p>
    <p>{data?.data.company}</p>
    <p>{data?.data.numberOfTeam}</p>
    </>
  )
}

export default InitialQueryDataPage