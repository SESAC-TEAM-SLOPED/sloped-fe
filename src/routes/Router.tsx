import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import WriteReview from "../pages/WriteReview/WriteReview";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/new" element={<WriteReview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
