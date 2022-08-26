import "./app.css";
import { Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainPage from "./Components/Main/Main.Page";
import UsersPage from "./Components/Users/Users.Page";
import UserDetailPage from "./Components/UserDetail/UserDetail.Page";
import ParallerQuery from "./Components/Paraller/ParallerQuery";

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Switch>
          <Route path={"/"} exact component={MainPage} />
          <Route path={"/users/:userId"} component={UserDetailPage} />
          <Route path={"/users"} component={UsersPage} />
          <Route path={"/paraller"} component={ParallerQuery} />
        </Switch>
        <ReactQueryDevtools position="bottom-left" initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
