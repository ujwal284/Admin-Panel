import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./Login";
import Calendar from "./components/Calendar";
import Client1 from "./components/Client1";
import Client2 from "./components/Client2";
import Settings from "./components/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients/client1" element={<Client1 />} />
        <Route path="/clients/client2" element={<Client2 />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
