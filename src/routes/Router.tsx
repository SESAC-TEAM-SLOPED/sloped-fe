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
import ViewFacilityDetails from "../pages/ViewFacilityDetails/ViewFacilityDetails";
import PostNewFacility from "../pages/PostNewFacility/PostNewFacility";
import MyPageBase from "../pages/MyPage/MyPageBase";
import MyFavorite from "../pages/MyPage/MyFavorite";
import MyProfileEditor from "../pages/MyPage/MyProfileEditor";
import MyReview from "../pages/MyPage/MyReview";
import MyReviewEditor from "../pages/MyPage/MyReviewEditor";
import MyReport from "../pages/MyPage/MyReport";
import AdminPageLogin from "../pages/AdminPage/AdminPageLogin";
import AdminPage from "../pages/AdminPage/AdminPage";
import AdminReport from "../pages/AdminReport/AdminReport";
import AdminLayout from "../components/AdminLayout/AdminLayout";

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
        <Route path="/facility/details" element={<ViewFacilityDetails />} />
        <Route path="/post/new/facility" element={<PostNewFacility />} />
        <Route path="/mypage" element={<MyPageBase />} />
        <Route path="/mypage/favorites" element={<MyFavorite />} />
        <Route path="/mypage/edit-info" element={<MyProfileEditor />} />
        <Route path="/mypage/my-reviews" element={<MyReview />} />
        <Route path="/mypage/edit-review" element={<MyReviewEditor />} />
        <Route path="/mypage/my-reports" element={<MyReport />} />
        <Route path="/admin" element={<AdminPageLogin />} />
        <Route path="/admin/base" element={<AdminPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/reports/facility" element={<AdminReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
