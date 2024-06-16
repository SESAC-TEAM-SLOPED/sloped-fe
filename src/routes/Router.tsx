import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
import Positioning from "../pages/Positioning/Positioning";
import ViewFacilityDetails from "../pages/ViewFacilityDetails/ViewFacilityDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
        <Route path="/facility/new/positioning" element={<Positioning />} />
        <Route path="/road/new/positioning" element={<Positioning />} />
        <Route path="/facility/new/details" element={<ViewFacilityDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
