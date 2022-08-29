import "./App.css";
import MainPage from "./components/MainPage/Main.Page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const clientProp = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={clientProp}>
        <MainPage />
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
