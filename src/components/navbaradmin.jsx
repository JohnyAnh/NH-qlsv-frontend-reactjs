import React, { useEffect } from 'react';
import '../components/navbaradmin.css';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleLogoutRedux } from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from "react-toastify";



export const NavbarAdmin = (props) => {
    //Phân quyền


    // const [activeLink, setActiveLink] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Cũng dùng để phân quyền
    const user = useSelector(state => state.user.account)
    const userRole = user ? user.Role : null;

    const handleLogOut = () => {
        dispatch(handleLogoutRedux());
        navigate("/login");
    }
    const handleLogIn = () => {
        if (user !== null) {
            navigate("/login")
        }
    }

    useEffect(() => {

        if (user && user.auth === false) {
            navigate("/");
            toast.success("Log out success!");
        }
    }, [user])
    console.log(">>>Check user data: ", user);
    return (

        <header className="navbar navbar-expand-md navbar-light ">
            <div className="collapse navbar-collapse" id="navbar-menu">
                <div className="navbar">
                    <div className="container-xl">
                        <ul className="navbar-nav">

                            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                                <Link to="/">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iDWqZ9ZAXL8dqOPeDBnz2I1dNLIVCPYHtw&usqp=CAU"
                                        width="110"
                                        height="32"
                                        alt="Tabler"
                                        className="navbar-brand-image"
                                    />
                                </Link>
                            </h1>

                            <li className="nav-item  " >
                                <Link className={"nav-link"} to="./">
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                                    </span>
                                    <span className="nav-link-title">
                                        Home
                                    </span>

                                </Link>
                            </li>

                            {userRole === 'Admin' && (
                                <li className="nav-item  "  >
                                    <Link className="nav-link" to="/liststudent" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                                                <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            List student
                                        </span>
                                    </Link>
                                </li>
                            )}

                            {userRole === 'Admin' && (
                                <li className="nav-item  "  >
                                    <Link className="nav-link" to="./Listuser" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
                                        </span>
                                        <span className="nav-link-title">
                                            List user
                                        </span>
                                    </Link>
                                </li>
                            )}
                            {userRole === 'Admin' && (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Interface
                                        </span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-menu-columns">
                                            <div className="dropdown-menu-column">
                                                <div className="dropend">
                                                    <a className="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                                                        Authentication
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <Link to="/login" className="dropdown-item">
                                                            Sign in
                                                        </Link>
                                                        {/* <a href="./sign-in-link.html" className="dropdown-item">
                                                        Sign in link
                                                    </a>
                                                    <a href="./sign-in-illustration.html" className="dropdown-item">
                                                        Sign in with illustration
                                                    </a>
                                                    <a href="./sign-in-cover.html" className="dropdown-item">
                                                        Sign in with cover
                                                    </a> */}
                                                        <Link to="/register" className="dropdown-item">
                                                            Sign up
                                                        </Link>
                                                        <Link to="/forgotPassword" className="dropdown-item">
                                                            Forgot password
                                                        </Link>
                                                        <Link to="/termsofservice" className="dropdown-item">
                                                            Terms of service
                                                        </Link>
                                                        {/* <a href="./auth-lock.html" className="dropdown-item">
                                                        Lock screen
                                                    </a> */}
                                                    </div>
                                                </div>
                                                <div className="dropend">
                                                    <a className="dropdown-item dropdown-toggle" href="#sidebar-error" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >

                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14l6 0" /></svg>
                                                        Error pages
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <Link to="/error404" className="dropdown-item">
                                                            404 page
                                                        </Link>
                                                        <Link to="/error500" className="dropdown-item">
                                                            500 page
                                                        </Link>
                                                        <Link to="/maintenance" className="dropdown-item">
                                                            Maintenance page
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link className="dropdown-item" to="/tables">
                                                    Tables
                                                </Link>
                                                <a className="dropdown-item" href="./lists.html">
                                                    Lists
                                                </a>


                                            </div>
                                            <div className="dropdown-menu-column">
                                                <a className="dropdown-item" href="./accordion.html">
                                                    Accordion
                                                </a>
                                                <a className="dropdown-item" href="./blank.html">
                                                    Blank page
                                                </a>
                                                <a className="dropdown-item" href="./badges.html">
                                                    Badges
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                </a>
                                                <a className="dropdown-item" href="./buttons.html">
                                                    Buttons
                                                </a>
                                                <div className="dropend">
                                                    <a className="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                                                        Cards
                                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a href="./cards.html" className="dropdown-item">
                                                            Sample cards
                                                        </a>
                                                        <a href="./card-actions.html" className="dropdown-item">
                                                            Card actions
                                                            <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                        </a>
                                                        <a href="./cards-masonry.html" className="dropdown-item">
                                                            Cards Masonry
                                                        </a>
                                                    </div>
                                                </div>
                                                <a className="dropdown-item" href="./colors.html">
                                                    Colors
                                                </a>
                                                <a className="dropdown-item" href="./datagrid.html">
                                                    Data grid
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                </a>
                                                <a className="dropdown-item" href="./datatables.html">
                                                    Datatables
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                </a>
                                                <a className="dropdown-item" href="./dropdowns.html">
                                                    Dropdowns
                                                </a>
                                                <a className="dropdown-item" href="./modals.html">
                                                    Modals
                                                </a>
                                                <a className="dropdown-item" href="./maps.html">
                                                    Maps
                                                </a>
                                                <a className="dropdown-item" href="./map-fullsize.html">
                                                    Map fullsize
                                                </a>
                                                <a className="dropdown-item" href="./maps-vector.html">
                                                    Vector maps
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                                </a>
                                                <a className="dropdown-item" href="./navigation.html">
                                                    Navigation
                                                </a>
                                                <a className="dropdown-item" href="./charts.html">
                                                    Charts
                                                </a>
                                                <a className="dropdown-item" href="./pagination.html">
                                                    Pagination
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            )}



                        </ul>
                        <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">

                            <>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                                        <span
                                            className="avatar avatar-sm"
                                            style={{ backgroundImage: 'url("data:image/png;base64,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")' }}
                                        ></span>
                                        <div className="d-none d-xl-block ps-2">
                                            <div>{user && user.username && <Link to=""> {user.username} </Link>}</div>
                                            <div className="mt-1 small text-secondary">
                                                {user && user.Role && <Link to="">Wellcome {user.Role} </Link>}
                                            </div>
                                        </div>
                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <a href="#" className="dropdown-item">Status</a>
                                            <a href="./profile.html" className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Feedback</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="./settings.html" className="dropdown-item">Settings</a>
                                            <div>
                                                <Link className="dropdown-item">
                                                    {
                                                        user && user.auth === true
                                                            ? <div onClick={() => handleLogOut()}>Logout</div>
                                                            : <div onClick={() => handleLogIn()}> Login </div>
                                                    }
                                                </Link>

                                            </div>


                                        </div>
                                    </a>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/js/tabler.min.js"></script>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler-flags.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler-payments.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler-vendors.min.css"
                />
            </Helmet>
        </header>





    );
}
