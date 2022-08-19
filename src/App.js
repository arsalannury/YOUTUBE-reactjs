import "./app.css";
import { Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient, } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./Components/Home/Home.Page";
import MoviesPage from "./Components/Movies/Movies.Page";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/movies"} component={MoviesPage} />
         </Switch>
        <ReactQueryDevtools position="bottom-left" initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
