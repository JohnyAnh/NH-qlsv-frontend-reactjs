import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleRefresh } from "./redux/actions/userAction";
import { Home } from "./pages/home/home";
import LoginPage from "./pages/authentication/login";
import { ListStudent } from "./pages/students/liststudent";
import { ListUser } from "./pages/users/listuser";
import { NavbarAdmin } from "./components/navbaradmin";
import { NavbarUser } from "./components/navbaruser";
import { Register } from "./pages/authentication/register";


function App() {
  const dataUserRedux = useSelector(state => state.user.account);
  console.log("<<< check redux:", dataUserRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh());
    }
  }, []);

  // Kiểm tra trạng thái đăng nhập
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? <NavbarAdmin /> : null}
        {/* {isLoggedIn ? <NavbarUser /> : null} */}
        {/* {isLoggedIn ? <HerderContent /> : null} */}

        <Routes>
          {/* Chỉ cho phép truy cập Home khi đã đăng nhập */}
          {isLoggedIn ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login" element={<LoginPage />} />
          )}
          <Route path="/liststudent" element={<ListStudent />} />
          <Route path="/Listuser" element={<ListUser />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />


          {/* Chuyển hướng đến trang đăng nhập nếu cố gắng truy cập các route khác */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

