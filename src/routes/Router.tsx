import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
import Positioning from "../pages/Positioning/Positioning";
import WriteRoadReport from "../pages/WriteRoadReport/WriteRoadReport";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
        <Route path="/facility/new/positioning" element={<Positioning />} />
        <Route path="/road/new/positioning" element={<Positioning />} />
        <Route path="/report/road/new" element={<WriteRoadReport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
