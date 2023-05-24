import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import SignIn from "./Routes/SignIn/SignIn";

import "./App.css";

function Shop() {
  return <h1> Shop Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
