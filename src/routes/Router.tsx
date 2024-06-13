import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
<<<<<<< HEAD
import Positioning from "../pages/Positioning/Positioning";
=======
import IdLogin from "../pages/Login/IdLogin";
import JoinPage from "../pages/Login/JoinPage";
import FindId from "../pages/Login/FindId";
import RegisterId from "../pages/Register/RegisterId";
import RegisterSocial from "../pages/Register/RegisterSocial";
>>>>>>> login

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
<<<<<<< HEAD
        <Route path="/facility/new/positioning" element={<Positioning />} />
        <Route path="/road/new/positioning" element={<Positioning />} />
=======
        <Route path="/login/id" element={<IdLogin />} />
        <Route path="/joinpage" element={<JoinPage />} />
        <Route path="/find/id" element={<FindId />} />
        <Route path="/register/id" element={<RegisterId />} />
        <Route path="/register/social" element={<RegisterSocial />} />
>>>>>>> login
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
