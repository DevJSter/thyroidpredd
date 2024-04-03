import React, { useState } from "react";
// import ProfileImage from "../img/user_profile_image.png";
// import DownArrow from "../img/down_arrow.svg";
// import EditProfileIcon from "../img/edit_profile_icon.svg";
// import LogOutIcon from "../img/logout_icon.svg";
// import MenuIcon from "../img/menu_icon.svg";
// import UserDashboard from "../img/user_dashboard.png";
// import AdminDashboard from "../img/admin_dashboard.png";
// import Logo from "../img/Logo.png";
// import PrivacyPolicyIcon from "../img/privacy_policy.png";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { userLogOutAction } from "../redux/actions/userAction";
// import SignUp from "../pages/SignUp";
// import Login from "../pages/Login";
import PredictionForm from "./Prediction";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [visible] = useState(true);
  const navigate = useNavigate();
  //   const { userInfo } = useSelector((state) => state.signIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const dispatch = useDispatch();
  const headerClasses = `z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-lightCard shadow-md ${
    visible ? "" : "hidden"
  }`;

  const dropDownHandle = () => {
    setIsMenu(!isMenu);
  };

  //   const logOutUser = async () => {
  //     await dispatch(userLogOutAction());
  //     setIsLoggedIn(false);
  //     window.location.reload(true);
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 500);
  //   };

  // Check if user was logged in previously or not
  //   useEffect(() => {
  //     if (userInfo) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   }, [userInfo]);

  const activeStyles =
    "text-lightPrimary after:block after:content-[''] after:absolute after:h-[2px] after:bg-lightPrimary after:w-full after:scale-x-100 after:transition after:duration-500 ";

  return (
    // <div className="fixed top-0 w-full bg-gradient-to-b bg-sky-15 shadow-md z-1000 ">
    <header
      className={`${headerClasses}`}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.0.2), rgba(0,0,0,0))",
        backgroundColor: "bg-sky-15",
      }}
    >
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img src={Logo} width="75px" alt="logo" /> */}
          <Link to="/">
            <p className="text-lightModeTextColor text-2xl ">
              <span className="font-semibold">Thyroid</span>Prediction
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-10">
            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              // onClick={() => handleItemClick(0)}
              to="/"
            >
              <span className="relative">
                Home
                {/* {selectedItem === true && (
                                        <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                    )} */}
              </span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              // onClick={() => handleItemClick(1)}
              to="/blogs"
            >
              <span className="relative">
                Blogs
                {/* {selectedItem === 1 && (
                                        <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                    )} */}
              </span>
            </NavLink>

            <>
              <Link to="./Prediction">
                <li className="text-lg text-lightModeTextColor hover:text-lightPrimary duration-100 transition-all ease-in-out cursor-pointer">
                  Prediction
                </li>
              </Link>
              <Link to="https://job-hunt-meet.vercel.app/">
                <li className="text-lg text-lightModeTextColor hover:text-lightPrimary duration-100 transition-all ease-in-out cursor-pointer">
                  Connect
                </li>
              </Link>

              <NavLink
                className={({ isActive }) =>
                  `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                    isActive ? activeStyles : " "
                  }`
                }
                // onClick={() => handleItemClick(2)}
                to="/awareness"
              >
                <span className="relative">
                  AwareNess
                  {/* {selectedItem === 2 && (
                                        <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                    )} */}
                </span>
              </NavLink>

              {/* <Link>
                <SignUp />
              </Link> */}
            </>
          </ul>

          <div className="relative">
            {isMenu && (
              <div className="z-50 w-[200px] bg-lightCard drop-shadow-lg rounded-lg flex flex-col absolute top-8 right-7 py-2">
                {/* {userInfo && userInfo.role === 1 && ( */}
                <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                  {/* <img
                    src={AdminDashboard}
                    className="pl-1"
                    alt="logout_icon"
                  /> */}
                  <Link
                    to="/admin/dashboard"
                    className="w-full flex items-center justify-center gap-3"
                    onClick={() => setIsMenu(false)}
                  >
                    Admin DashBoard
                  </Link>
                </div>

                {/* {userInfo && userInfo.role === 0 && ( */}
                <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                  {/* <img src={UserDashboard} className="pl-1" alt="logout_icon" /> */}
                  <p
                    className="w-full flex items-center justify-center gap-3"
                    onClick={() => setIsMenu(false)}
                  >
                    <Link to="/user/dashboard">User DashBoard</Link>
                  </p>
                </div>
                {/* )} */}
                {/* <Link
                  to="/"
                  onClick={() => {
                    logOutUser();
                  }}
                >
                  <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                    <img src={LogOutIcon} className="pl-1" alt="logout_icon" />

                    <p
                      className="w-full flex items-center justify-center gap-3 text-red-600"
                      onClick={() => setIsMenu(false)}
                    >
                      Log out
                    </p>
                  </div>
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    // </div>
  );
};

export default NavBar;
