import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { handleLoginRedux } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isShowpassword, setIsShowPassword] = useState(false);


    const isLoading = useSelector(state => state.user.isLoading);
    const account = useSelector(state => state.user.account);

    useEffect(() => {
        if (account.auth === false) {
            // Hiển thị thông báo lỗi hoặc thực hiện các xử lý khác
            toast.error("Login failed. Please check your credentials.");
        } else if (account.auth === true) {
            // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
            navigate("/");
        }
    }, [account]);


    const handleLogin = async () => {
        if (!username || !password) {
            toast.error("Username/ Password is required");
            return;
        }
        dispatch(handleLoginRedux(username, password));
    };
    return (


        <div className="d-flex flex-column bg-white">
            <script src="./dist/js/demo-theme.min.js?1684106062"></script>
            <div className="row g-0 flex-fill">
                <div className="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center">
                    <div className="container container-tight my-5 px-lg-5">
                        <div className="text-center mb-4">
                            <a href="." className="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt="" /></a>
                        </div>
                        <h2 className="h3 text-center mb-3">
                            Login to your account
                        </h2>
                        <div autoComplete="off" noValidate>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="username"
                                    autoComplete="off"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Password
                                    {/* <span className="form-label-description">
                                        <a href="./forgot-password.html">I forgot password</a>
                                    </span> */}
                                </label>
                                <div className="input-group input-group-flat">
                                    <input
                                        type={isShowpassword === true ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Your password"
                                        autoComplete="off"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}

                                    />
                                    <span className="input-group-text">
                                        <i
                                            className={isShowpassword === true ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}
                                            onClick={() => setIsShowPassword(!isShowpassword)}
                                        ></i>
                                    </span>
                                </div>
                            </div>
                            {/* <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div> */}
                            <div className="form-footer">
                                <button
                                    className="btn btn-primary w-100"
                                    disabled={username && password ? false : true}
                                    onClick={() => handleLogin()}

                                >Sign in</button>
                            </div>
                        </div>
                        <div className="text-center text-muted mt-3">
                            Don't have an account yet? <Link to="/register" tabIndex="-1">Sign up</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
                    {/* Photo */}
                    <div className="bg-cover h-100 min-vh-100" style={{ backgroundImage: "url(../../static/photos/finances-us-dollars-and-bitcoins-currency-money-2.jpg)" }}></div>

                </div>
            </div>
            {/* Libs JS */}
            {/* <!-- CSS files --> */}
            {/* <link rel="stylesheet" type="text/css" href="/%PUBLIC_URL%/dist/css/tabler.min.css?1684106062" />
            <link rel="stylesheet" type="text/css" href="/%PUBLIC_URL%/dist/css/tabler-flags.min.css?1684106062" />
            <link rel="stylesheet" type="text/css" href="/%PUBLIC_URL%/dist/css/tabler-payments.min.css?1684106062" />
            <link rel="stylesheet" type="text/css" href="/%PUBLIC_URL%/dist/css/tabler-vendors.min.css?1684106062" />
            <link rel="stylesheet" type="text/css" href="/%PUBLIC_URL%/dist/css/demo.min.css?1684106062" /> */}

            {/* Tabler Core */}
            <script src="./dist/js/tabler.min.js?1684106062" defer></script>
            <script src="./dist/js/demo.min.js?1684106062" defer></script>
        </div>
    );
}

export default LoginPage;
