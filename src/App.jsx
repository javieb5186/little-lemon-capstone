import ReserveMain from "./components/mains/ReserveMain";
import HomeMain from "./components/mains/HomeMain";
import Layout from "./components/Layout";
// import TimeModal from "./components/modals/TimeModal";
// import DateModal from "./components/modals/DateModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path="/booking" element={<ReserveMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
