import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
import IdLogin from "../pages/Login/IdLogin";
import JoinPage from "../pages/Login/JoinPage";
import FindId from "../pages/Login/FindId";
import RegisterId from "../pages/Register/RegisterId";
import RegisterSocial from "../pages/Register/RegisterSocial";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
        <Route path="/login/id" element={<IdLogin />} />
        <Route path="/joinpage" element={<JoinPage />} />
        <Route path="/find/id" element={<FindId />} />
        <Route path="/register/id" element={<RegisterId />} />
        <Route path="/register/social" element={<RegisterSocial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
