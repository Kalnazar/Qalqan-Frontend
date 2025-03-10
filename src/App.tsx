import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Encryption from "./pages/Encryption";
import Decryption from "./pages/Decryption";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/encrypt" element={<Encryption />} />
          <Route path="/decrypt" element={<Decryption />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
      </Routes>
    </>
  );
}

export default App;
