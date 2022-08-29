import "./App.css";
import MainPage from "./components/MainPage/Main.Page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {Switch,Route} from "react-router-dom"

const clientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={clientProp}>
      <Switch>
        <Route path={"/"} component={""} exact />
        <Route path={"user/:id"} />
      </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
