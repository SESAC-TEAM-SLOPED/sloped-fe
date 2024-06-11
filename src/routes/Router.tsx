import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Layout from "../components/Layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
