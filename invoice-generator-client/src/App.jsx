import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage";
import DashBoard from "./pages/DashBoard";
import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBar></MenuBar>
        <Toaster></Toaster>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/generate" element={<MainPage />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
