//import Components

//Home Page(1)
import Index from "../Pages/Index";

//Books Page(2)
import Books from "../Pages/Books";
//BooksDetailsALL page From Books page
import BooksDetailsALL from "../Components/Books/BooksDetailsALL";
//CustomerDetails page From Books page
import ProductDetails from "../Components/Books/BooksDetailsPage/ProductDetails";
//CustomerReviews page From Books page
import CustomerReviews from "../Components/Books/BooksDetailsPage/CustomerReviews";
//RecommendedBooks page From Books page
import RecommendedForYou from "../Components/Books/BooksDetailsPage/RecommendedForYou";

//AboutUs Page(3)
import AboutUs from "../Pages/AboutUs";

//Carts Page
import Carts from "../Pages/Carts";

//WishList Page
import WishList from "../Pages/WishList";
//CheckOutWishList Page From WishList Page
import CheckOutWishList from "../Pages/CheckOutWishList";
//OrderConfirmedSuccessful Page From WishList Page
import OrderConfirmedSuccessful from "../Components/CheckOutWishListPage/OrderConfirmedSuccessful";

//HistoryAll Page
import HistoryAll from "../Pages/HistoryAll";
//HistoryInProgress Page From History Page
import HistoryInProgress from "../Components/History/HistoryInProgress";
//HistoryCompleted Page From History Page
import HistoryCompleted from "../Components/History/HistoryCompleted";
//HistoryCanceled Page From History Page
import HistoryCanceled from "../Components/History/HistoryCanceled";

//LoginIn Page
import LoginIn from "../Pages/LoginIn";
//SignUp Page
import Signup from "../Pages/SignUp";
//Forget Page
import Forget from "../Pages/Forget";
//RestPassword Page
import RestPassword from "../Pages/RestPassword";
//NewPassword Page
import NewPassword from "../Pages/NewPassword";
// PasswordSuccessful Page From CreateNewPassword
import PasswordSuccessful from "../Components/CreateNewPassword/PasswordSuccessful";

//Layout Page
import Layout from "../Layout/Layout";

//Profile Page
import Profile from "../Pages/Profile";

//NotFound Page
import NotFound from "../Components/NotFound";

import { Route, Routes } from "react-router-dom";
//import BrowserRouter
import TestStrapiPage from "../ProjectTestCoding/TestTrapiPage/TestStrapiPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />

        <Route path="AboutUs" element={<AboutUs />} />
      </Route>

      <Route path="*" element={<NotFound />} />

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      {/* ALL Books */}
      <Route path="/" element={<Layout />}>
        <Route path="Books" element={<Books />} />

        <Route path="BooksDetailsALL" element={<BooksDetailsALL />} />
      </Route>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      {/* All WishList OR Carts */}
      <Route path="/" element={<Layout />}>
        <Route path="Carts" element={<Carts />} />

        <Route path="WishList" element={<WishList />} />
        <Route path="CheckOutWishList" element={<CheckOutWishList />} />

        <Route path="Profile" element={<Profile />} />
      </Route>

      <Route
        path="/OrderConfirmed-Successful"
        element={<OrderConfirmedSuccessful />}
      />

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <Route path="/" element={<Layout />}>
        <Route path="HistoryAll" element={<HistoryAll />} />
        <Route path="HistoryInProgress" element={<HistoryInProgress />} />
        <Route path="HistoryCompleted" element={<HistoryCompleted />} />
        <Route path="HistoryCanceled" element={<HistoryCanceled />} />
      </Route>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <Route path="/" element={<Layout />}>
        <Route path="loginIn" element={<LoginIn />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="Forget" element={<Forget />} />
        <Route path="Resetpassword" element={<RestPassword />} />
        <Route path="Create-New-Password" element={<NewPassword />} />
      </Route>

      <Route path="/Password-Success" element={<PasswordSuccessful />} />

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      {/* ProjectTestCoding */}
      <Route path="/TestStrapi" element={<TestStrapiPage />} />
    </Routes>
  );
}
