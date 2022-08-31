import "./App.css";
import MainPage from "./components/MainPage/Main.Page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";
import Userpage from "./components/User/User.page";
import GroupOnePage from "./components/GroupOne/GroupOne.page";

const clientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={clientProp}>
        <Switch>
          <Route path={"/"} component={MainPage} exact />
          <Route path={"/user/:id"} component={Userpage} />
          <Route path={'/group-one'} render={(props) => <GroupOnePage {...props} groupOneIds={[1,2,3]} />} />
          {/* <Route path={'/group-one'} component={GroupOnePage} /> */}
        </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
