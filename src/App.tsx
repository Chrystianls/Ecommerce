import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/index";

function App() {
  async function teste() {
    const response = await fetch("http://localhost:3000/api/v1/pants");
    const json = await response.json();
    console.log(json);
  }

  teste();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
