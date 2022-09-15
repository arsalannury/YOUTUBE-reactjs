import { useGame } from "../../hooks/Game"
import { useParams } from "react-router-dom";

const DetailGamePage = () => {
    const param = useParams().id

  const {isLoading,isError,data} = useGame(param);
  console.log(data);
  return (
    <>
    
    </>
  )
}

export default DetailGamePage