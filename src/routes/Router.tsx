import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";
import Positioning from "../pages/Positioning/Positioning";

import LocalLogin from "../pages/Login/LocalLogin";
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
import MySocialProfileEditor from "../pages/MyPage/MySocialProfileEditor";
import MyReview from "../pages/MyPage/MyReview";
import MyReviewEditor from "../pages/MyPage/MyReviewEditor";
import MyReport from "../pages/MyPage/MyReport";
import AdminLogin from "../pages/AdminPage/AdminLogin";
import AdminMember from "../pages/AdminPage/AdminMember";
import AdminReport from "../pages/AdminReport/AdminReport";
import AdminLayout from "../components/AdminLayout/AdminLayout";
import AdminFacility from "../pages/AdminPage/AdminFacility";
import AdminFacilityDetail from "../pages/AdminPage/AdminFacilityDetail";
import AdminRoadReport from "../pages/AdminPage/AdminRoadReport";
import AdminRoadReportDetail from "../pages/AdminPage/AdminRoadReportDetail";
import AdminReview from "../pages/AdminPage/AdminReview";
import AdminReviewDetail from "../pages/AdminPage/AdminReviewDetail";
import GetJwt from "../components/AuthenticationForm/GetJwt";
import CheckAuth from "./CheckAuth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* token 유무 체크 x 관리자 페이지는 수정 예정 */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/reports/facility" element={<AdminReport />} />
          <Route path="/admin/user" element={<AdminMember />} />
          <Route path="/admin/facility" element={<AdminFacility />} />
          <Route path="/admin/facility/:id" element={<AdminFacilityDetail />} />
          <Route path="/admin/road" element={<AdminRoadReport />} />
          <Route path="/admin/road/:id" element={<AdminRoadReportDetail />} />
          <Route path="/admin/review" element={<AdminReview />} />
          <Route path="/admin/review/:id" element={<AdminReviewDetail />} />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="/facility/details" element={<ViewFacilityDetails />} />
        <Route path="/get-jwt" element={<GetJwt />} />
        <Route path="/login/register/id" element={<RegisterId />} />
        <Route path="/login/register/social" element={<RegisterSocial />} />
        <Route path="/login/find-information" element={<FindInformation />} />
        <Route path="/login/local" element={<LocalLogin />} />
        {/* token 유무 체크 */}
        <Route path="" element={<CheckAuth />}>
          <Route path="/joinpage" element={<JoinPage />} />
          <Route path="/review/new" element={<WriteReview />} />
          <Route path="/facility/new/positioning" element={<Positioning />} />
          <Route path="/road/new/positioning" element={<Positioning />} />
          <Route path="/report/road/new" element={<Positioning />} />
          <Route path="/report/road/form" element={<RoadReportForm />} />
          <Route path="/submit/completed" element={<SubmitComplete />} />
          <Route path="/report/facility/new" element={<PostNewFacility />} />
          <Route path="/mypage" element={<MyPageBase />} />
          <Route path="/mypage/favorites" element={<MyFavorite />} />
          <Route path="/mypage/edit-info" element={<MyProfileEditor />} />
          <Route
            path="/mypage/edit-social-info"
            element={<MySocialProfileEditor />}
          />
          <Route path="/mypage/my-reviews" element={<MyReview />} />
          <Route path="/mypage/edit-review" element={<MyReviewEditor />} />
          <Route path="/mypage/my-reports" element={<MyReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
