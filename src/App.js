import "./App.css";
import MainPage from "./components/MainPage/Main.Page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";
import Userpage from "./components/User/User.page";
import GroupOnePage from "./components/GroupOne/GroupOne.page";
import GroupTwoPage from "./components/GroupTwo/GroupTwo.page";
import DependentPage from "./components/DependentQueries/Dependent.page";
import GamesPage from "./components/Games/Games.page";
import InitialQueryDataPage from "./components/InitialQueryData/InitialQueryData.page";

const clientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={clientProp}>
        <Switch>
          <Route path={"/"} component={MainPage} exact />
          <Route path={"/user/:id"} component={Userpage} />
          <Route path={'/group-one'} render={(props) => <GroupOnePage {...props} groupOneIds={[1,2,3]} />} />
          <Route path={'/group-two'} render={(props) => <GroupTwoPage {...props} groupTwoIds={[4,5,6]} /> }  />
          <Route path={'/dependent'} component={DependentPage} />
          <Route path={"/games/:id"} component={InitialQueryDataPage} />
          <Route path={"/games"} component={GamesPage} />
         </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
