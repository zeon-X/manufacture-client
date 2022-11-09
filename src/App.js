import "./App.css";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Drawer>
              <Home></Home>
            </Drawer>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
