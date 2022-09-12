import "./App.css";
import HomePage from "./components/Home/Home.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";
import GamesPage from "./components/Games/Games.page";
import DetailGamePage from "./components/Games/DetailGame.page";
import LowScorePage from "./components/LowScore/LowScore.page";

const queryClientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientProp}>
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/games-page"} component={GamesPage} />
          <Route path={"/detail-game/:id"} component={DetailGamePage} />
          <Route path={"/low-score"} render={(props) => <LowScorePage {...props} lowIds={[1,2,3,4]} />} />
        </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
