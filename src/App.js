import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";


const queryClientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientProp}>
        <Switch>
        <Route path={'/'} exact component={HomePage} />
        </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
