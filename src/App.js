import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Switch, Route } from "react-router-dom";


const queryClientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClientProp}>
        <Switch>
        
        </Switch>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
