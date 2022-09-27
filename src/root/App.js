// import "./App.css";
import {QueryClientProvider,QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import {Routes,Route} from 'react-router-dom';
import Wiki from "../components/Wiki/Wiki";

const clientProp = new QueryClient();

function App() {
  return (
    <>
     <QueryClientProvider client={clientProp}>
           <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
           <Routes>
            <Route path="/" element={<Wiki />} />
           </Routes>
     </QueryClientProvider>
    </>
  );
}

export default App;
