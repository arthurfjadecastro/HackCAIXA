import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useMatchesNotebooks, useMatchesSmartphone } from "./Components/Breakpoints"


function Home() { 


  const query = useMatchesSmartphone()
  console.log(query)
  return (
    <>
      <h1>hello world</h1>
    </>
  );
}



function Layout() {
  return (
    <div>
      <Home></Home>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
