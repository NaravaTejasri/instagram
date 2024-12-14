import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
