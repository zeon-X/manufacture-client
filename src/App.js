import "./App.css";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import AboutUs from "./pages/AboutUs/AboutUs";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";

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
        <Route
          path="/login"
          element={
            <Drawer>
              <Login></Login>
            </Drawer>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Drawer>
              <Register></Register>
            </Drawer>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Drawer>
              <AboutUs></AboutUs>
            </Drawer>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <Drawer>
              <Shop></Shop>
            </Drawer>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <Drawer>
              <Blog></Blog>
            </Drawer>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
