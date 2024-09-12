import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
