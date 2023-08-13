import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join.jsx";
import MyPage from "./pages/MyPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        {/* 임시 코드 */}
        {/* <Route path="/Mypage" element={<Mypage />} /> */}
        {/* 임시 코드 */}
        <Route path="/EditProfile" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
