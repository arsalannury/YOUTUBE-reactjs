import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GamesPage from "./components/Games/GamesPage";
import AboutUsPage from "./components/AboutUs/AboutUsPage";
import DetailGamePage from "./components/DetailGame/DetailGamePage";
import BestGamesPage from "./components/BestGames/BestGamesPage";


const queryClientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientProp}>
        <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={"/games"} component={GamesPage} />
        <Route path={"/about-us"} component={AboutUsPage} />
        <Route path={"/game/:id"} component={DetailGamePage} />
        <Route path={"/best-games"} render={(props) => <BestGamesPage {...props} ids={[0,1,2]} /> } />
        {/* <Route path={'/best-games'}>
            <BestGamesPage ids={[0,1,2]} />
        </Route> */}
        </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
