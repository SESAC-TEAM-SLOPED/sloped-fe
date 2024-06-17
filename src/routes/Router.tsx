import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
import Positioning from "../pages/Positioning/Positioning";

import IdLogin from "../pages/Login/IdLogin";
import JoinPage from "../pages/Login/JoinPage";
import FindInformation from "../pages/Login/FindInformation";
import RegisterId from "../pages/Register/RegisterId";
import RegisterSocial from "../pages/Register/RegisterSocial";
import RoadReportForm from "../pages/RoadReport/RoadReportForm";
import SubmitComplete from "../pages/SubmitComplete/SubmitComplete";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
        <Route path="/facility/new/positioning" element={<Positioning />} />
        <Route path="/road/new/positioning" element={<Positioning />} />
        <Route path="/login/id" element={<IdLogin />} />
        <Route path="/joinpage" element={<JoinPage />} />
        <Route path="/find/information" element={<FindInformation />} />
        <Route path="/register/id" element={<RegisterId />} />
        <Route path="/register/social" element={<RegisterSocial />} />
        <Route path="/report/road/new" element={<Positioning />} />
        <Route path="/report/road/form" element={<RoadReportForm />} />
        <Route path="/submit/completed" element={<SubmitComplete />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
