import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
import Positioning from "../pages/Positioning/Positioning";
import RoadReportForm from "../pages/RoadReport/RoadReportForm";
import SubmitComplete from "../pages/SubmitComplete/SubmitComplete";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
        <Route path="/facility/new/positioning" element={<Positioning />} />
        <Route path="/report/road/new" element={<Positioning />} />
        <Route path="/report/road/form" element={<RoadReportForm />} />
        <Route path="/submit/completed" element={<SubmitComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
