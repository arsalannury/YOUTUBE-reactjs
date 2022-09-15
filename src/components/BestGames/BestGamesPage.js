import { useBestGames } from "../../hooks/BestGames";

const BestGamesPage = ({ids}) => {

    const [first] = useBestGames(ids);

   console.log(222);
  return (
    <>
    <h2>fefe</h2>
    </>
  )
}

export default BestGamesPage