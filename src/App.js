import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GamesPage from "./components/Games/GamesPage";
import AboutUsPage from "./components/AboutUs/AboutUsPage";


const queryClientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientProp}>
        <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={"/games"} component={GamesPage} />
        <Route path={"/about-us"} component={AboutUsPage} />
        </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
