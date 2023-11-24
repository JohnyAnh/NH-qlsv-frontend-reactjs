import React from "react";

export const Tables = () => {
    return (
        <body>
            <script src="./dist/js/demo-theme.min.js?1684106062"></script>
            <div className="page-wrapper">
                <div class="container-xl">
                    <div class="row row-cards">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="table-responsive">
                                    <table className="table table-vcenter card-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Title</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th className="w-1"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Paweł Kuna</td>
                                                <td className="text-muted">UI Designer, Training</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">paweluna@howstuffworks.com</a>
                                                </td>
                                                <td className="text-muted">User</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jeffie Lewzey</td>
                                                <td className="text-muted">Chemical Engineer, Support</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">jlewzey1@seesaa.net</a>
                                                </td>
                                                <td className="text-muted">Admin</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mallory Hulme</td>
                                                <td className="text-muted">Geologist IV, Support</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">mhulme2@domainmarket.com</a>
                                                </td>
                                                <td className="text-muted">User</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dunn Slane</td>
                                                <td className="text-muted">Research Nurse, Sales</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">dslane3@epa.gov</a>
                                                </td>
                                                <td className="text-muted">Owner</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Emmy Levet</td>
                                                <td className="text-muted">VP Product Management, Accounting</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">elevet4@senate.gov</a>
                                                </td>
                                                <td className="text-muted">Admin</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maryjo Lebarree</td>
                                                <td className="text-muted">Civil Engineer, Product Management</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">mlebarree5@unc.edu</a>
                                                </td>
                                                <td className="text-muted">User</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Egan Poetz</td>
                                                <td className="text-muted">Research Nurse, Engineering</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">epoetz6@free.fr</a>
                                                </td>
                                                <td className="text-muted">Admin</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kellie Skingley</td>
                                                <td className="text-muted">Teacher, Services</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">kskingley7@columbia.edu</a>
                                                </td>
                                                <td className="text-muted">Owner</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Top Pages</h3>
                                    <table className="table table-sm table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Page</th>
                                                <th className="text-end">Visitors</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '82.54%' }}
                                                                role="progressbar"
                                                                aria-valuenow={82.54}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="82.54% Complete"
                                                            >
                                                                <span className="visually-hidden">82.54% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">4896</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '76.29%' }}
                                                                role="progressbar"
                                                                aria-valuenow={76.29}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="76.29% Complete"
                                                            >
                                                                <span className="visually-hidden">76.29% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/form-elements.html</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">3652</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '72.65%' }}
                                                                role="progressbar"
                                                                aria-valuenow={72.65}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="72.65% Complete"
                                                            >
                                                                <span className="visually-hidden">72.65% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/index.html</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">3256</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '44.89%' }}
                                                                role="progressbar"
                                                                aria-valuenow={44.89}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="44.89% Complete"
                                                            >
                                                                <span className="visually-hidden">44.89% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/icons.html</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">986</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '41.12%' }}
                                                                role="progressbar"
                                                                aria-valuenow={41.12}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="41.12% Complete"
                                                            >
                                                                <span className="visually-hidden">41.12% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/docs/</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">912</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '32.65%' }}
                                                                role="progressbar"
                                                                aria-valuenow={32.65}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="32.65% Complete"
                                                            >
                                                                <span className="visually-hidden">32.65% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/accordion.html</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">855</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '16.22%' }}
                                                                role="progressbar"
                                                                aria-valuenow={16.22}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="16.22% Complete"
                                                            >
                                                                <span className="visually-hidden">16.22% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/datagrid.html</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">764</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progressbg">
                                                        <div className="progress progressbg-progress">
                                                            <div
                                                                className="progress-bar bg-primary-lt"
                                                                style={{ width: '8.69%' }}
                                                                role="progressbar"
                                                                aria-valuenow={8.69}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                aria-label="8.69% Complete"
                                                            >
                                                                <span className="visually-hidden">8.69% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressbg-text">/datatables.html</div>
                                                    </div>
                                                </td>
                                                <td className="w-1 fw-bold text-end">686</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="card">
                                <div className="table-responsive">
                                    <table className="table table-vcenter card-table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Title</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th className="w-1"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Maryjo Lebarree</td>
                                                <td className="text-muted">
                                                    Civil Engineer, Product Management
                                                </td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">
                                                        mlebarree5@unc.edu
                                                    </a>
                                                </td>
                                                <td className="text-muted">User</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Egan Poetz</td>
                                                <td className="text-muted">Research Nurse, Engineering</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">
                                                        epoetz6@free.fr
                                                    </a>
                                                </td>
                                                <td className="text-muted">Admin</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kellie Skingley</td>
                                                <td className="text-muted">Teacher, Services</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">
                                                        kskingley7@columbia.edu
                                                    </a>
                                                </td>
                                                <td className="text-muted">User</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Christabel Charlwood</td>
                                                <td className="text-muted">Tax Accountant, Engineering</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">
                                                        ccharlwood8@nifty.com
                                                    </a>
                                                </td>
                                                <td className="text-muted">Owner</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Haskel Shelper</td>
                                                <td className="text-muted">Staff Scientist, Legal</td>
                                                <td className="text-muted">
                                                    <a href="#" className="text-reset">
                                                        hshelper9@woothemes.com
                                                    </a>
                                                </td>
                                                <td className="text-muted">Admin</td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="card">
                                <div className="table-responsive">
                                    <table className="table table-vcenter table-mobile-md card-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Title</th>
                                                <th>Role</th>
                                                <th className="w-1"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Name">
                                                    <div className="d-flex py-1 align-items-center">
                                                        <span className="avatar me-2" style={{ backgroundImage: 'url(./static/avatars/010m.jpg)' }}></span>
                                                        <div className="flex-fill">
                                                            <div className="font-weight-medium">Thatcher Keel</div>
                                                            <div className="text-muted">
                                                                <a href="#" className="text-reset">
                                                                    tkeelf@blogger.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Title">
                                                    <div>VP Sales</div>
                                                    <div className="text-muted">Business Development</div>
                                                </td>
                                                <td className="text-muted" data-label="Role">
                                                    User
                                                </td>
                                                <td>
                                                    <div className="btn-list flex-nowrap">
                                                        <a href="#" className="btn">
                                                            Edit
                                                        </a>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                                                Actions
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">
                                                                    Action
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Another action
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Name">
                                                    <div className="d-flex py-1 align-items-center">
                                                        <span className="avatar me-2" style={{ backgroundImage: 'url(./static/avatars/010m.jpg)' }}></span>
                                                        <div className="flex-fill">
                                                            <div className="font-weight-medium">Thatcher Keel</div>
                                                            <div className="text-muted">
                                                                <a href="#" className="text-reset">
                                                                    tkeelf@blogger.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Title">
                                                    <div>VP Sales</div>
                                                    <div className="text-muted">Business Development</div>
                                                </td>
                                                <td className="text-muted" data-label="Role">
                                                    User
                                                </td>
                                                <td>
                                                    <div className="btn-list flex-nowrap">
                                                        <a href="#" className="btn">
                                                            Edit
                                                        </a>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                                                Actions
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">
                                                                    Action
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Another action
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr><tr>
                                                <td data-label="Name">
                                                    <div className="d-flex py-1 align-items-center">
                                                        <span className="avatar me-2" style={{ backgroundImage: 'url(./static/avatars/010m.jpg)' }}></span>
                                                        <div className="flex-fill">
                                                            <div className="font-weight-medium">Thatcher Keel</div>
                                                            <div className="text-muted">
                                                                <a href="#" className="text-reset">
                                                                    tkeelf@blogger.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Title">
                                                    <div>VP Sales</div>
                                                    <div className="text-muted">Business Development</div>
                                                </td>
                                                <td className="text-muted" data-label="Role">
                                                    User
                                                </td>
                                                <td>
                                                    <div className="btn-list flex-nowrap">
                                                        <a href="#" className="btn">
                                                            Edit
                                                        </a>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                                                Actions
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">
                                                                    Action
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Another action
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr><tr>
                                                <td data-label="Name">
                                                    <div className="d-flex py-1 align-items-center">
                                                        <span className="avatar me-2" style={{ backgroundImage: 'url(./static/avatars/010m.jpg)' }}></span>
                                                        <div className="flex-fill">
                                                            <div className="font-weight-medium">Thatcher Keel</div>
                                                            <div className="text-muted">
                                                                <a href="#" className="text-reset">
                                                                    tkeelf@blogger.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Title">
                                                    <div>VP Sales</div>
                                                    <div className="text-muted">Business Development</div>
                                                </td>
                                                <td className="text-muted" data-label="Role">
                                                    User
                                                </td>
                                                <td>
                                                    <div className="btn-list flex-nowrap">
                                                        <a href="#" className="btn">
                                                            Edit
                                                        </a>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                                                Actions
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">
                                                                    Action
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Another action
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr><tr>
                                                <td data-label="Name">
                                                    <div className="d-flex py-1 align-items-center">
                                                        <span className="avatar me-2" style={{ backgroundImage: 'url(./static/avatars/010m.jpg)' }}></span>
                                                        <div className="flex-fill">
                                                            <div className="font-weight-medium">Thatcher Keel</div>
                                                            <div className="text-muted">
                                                                <a href="#" className="text-reset">
                                                                    tkeelf@blogger.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Title">
                                                    <div>VP Sales</div>
                                                    <div className="text-muted">Business Development</div>
                                                </td>
                                                <td className="text-muted" data-label="Role">
                                                    User
                                                </td>
                                                <td>
                                                    <div className="btn-list flex-nowrap">
                                                        <a href="#" className="btn">
                                                            Edit
                                                        </a>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                                                Actions
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">
                                                                    Action
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Another action
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr><tr>
                                                <td data-label="Name">
                                                    <div className="d-flex py-1 align-items-center">
                                                        <span className="avatar me-2" style={{ backgroundImage: 'url(./static/avatars/010m.jpg)' }}></span>
                                                        <div className="flex-fill">
                                                            <div className="font-weight-medium">Thatcher Keel</div>
                                                            <div className="text-muted">
                                                                <a href="#" className="text-reset">
                                                                    tkeelf@blogger.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Title">
                                                    <div>VP Sales</div>
                                                    <div className="text-muted">Business Development</div>
                                                </td>
                                                <td className="text-muted" data-label="Role">
                                                    User
                                                </td>
                                                <td>
                                                    <div className="btn-list flex-nowrap">
                                                        <a href="#" className="btn">
                                                            Edit
                                                        </a>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                                                Actions
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">
                                                                    Action
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Another action
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Invoices</h3>
                                </div>
                                <div className="card-body border-bottom py-3">
                                    <div className="d-flex">
                                        <div className="text-muted">
                                            Show
                                            <div className="mx-2 d-inline-block">
                                                <input type="text" className="form-control form-control-sm" value="8" size="3" aria-label="Invoices count" />
                                            </div>
                                            entries
                                        </div>
                                        <div className="ms-auto text-muted">
                                            Search:
                                            <div className="ms-2 d-inline-block">
                                                <input type="text" className="form-control form-control-sm" aria-label="Search invoice" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table card-table table-vcenter text-nowrap datatable">
                                        <thead>
                                            <tr>
                                                <th className="w-1">
                                                    <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" />
                                                </th>
                                                <th className="w-1">
                                                    No.
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-sm icon-thick" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M6 15l6 -6l6 6" />
                                                    </svg>
                                                </th>
                                                <th>Invoice Subject</th>
                                                <th>Client</th>
                                                <th>VAT No.</th>
                                                <th>Created</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001401</span>
                                                </td>
                                                <td>
                                                    <a href="invoice.html" className="text-reset" tabIndex="-1">Design Works</a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"></span>
                                                    Carlson Limited
                                                </td>
                                                <td>
                                                    87956621
                                                </td>
                                                <td>
                                                    15 Dec 2017
                                                </td>
                                                <td>
                                                    <span className="badge bg-success me-1"></span> Paid
                                                </td>
                                                <td>$887</td>
                                                <td className="text-end">
                                                    <span className="dropdown">
                                                        <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </div>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001401</span>
                                                </td>
                                                <td>
                                                    <a href="invoice.html" className="text-reset" tabIndex="-1">Design Works</a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"></span>
                                                    Carlson Limited
                                                </td>
                                                <td>
                                                    87956621
                                                </td>
                                                <td>
                                                    15 Dec 2017
                                                </td>
                                                <td>
                                                    <span className="badge bg-success me-1"></span> Paid
                                                </td>
                                                <td>$887</td>
                                                <td className="text-end">
                                                    <span className="dropdown">
                                                        <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </div>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001401</span>
                                                </td>
                                                <td>
                                                    <a href="invoice.html" className="text-reset" tabIndex="-1">Design Works</a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"></span>
                                                    Carlson Limited
                                                </td>
                                                <td>
                                                    87956621
                                                </td>
                                                <td>
                                                    15 Dec 2017
                                                </td>
                                                <td>
                                                    <span className="badge bg-success me-1"></span> Paid
                                                </td>
                                                <td>$887</td>
                                                <td className="text-end">
                                                    <span className="dropdown">
                                                        <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </div>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001401</span>
                                                </td>
                                                <td>
                                                    <a href="invoice.html" className="text-reset" tabIndex="-1">Design Works</a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"></span>
                                                    Carlson Limited
                                                </td>
                                                <td>
                                                    87956621
                                                </td>
                                                <td>
                                                    15 Dec 2017
                                                </td>
                                                <td>
                                                    <span className="badge bg-success me-1"></span> Paid
                                                </td>
                                                <td>$887</td>
                                                <td className="text-end">
                                                    <span className="dropdown">
                                                        <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </div>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001401</span>
                                                </td>
                                                <td>
                                                    <a href="invoice.html" className="text-reset" tabIndex="-1">Design Works</a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"></span>
                                                    Carlson Limited
                                                </td>
                                                <td>
                                                    87956621
                                                </td>
                                                <td>
                                                    15 Dec 2017
                                                </td>
                                                <td>
                                                    <span className="badge bg-success me-1"></span> Paid
                                                </td>
                                                <td>$887</td>
                                                <td className="text-end">
                                                    <span className="dropdown">
                                                        <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </div>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer d-flex align-items-center">
                                    <p className="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                                    <ul className="pagination m-0 ms-auto">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M15 6l-6 6l6 6" />
                                                </svg>
                                                prev
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                next
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 6l6 6l-6 6" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="./dist/js/tabler.min.js?1684106062" defer></script>
            <script src="./dist/js/demo.min.js?1684106062" defer></script>
        </body>
    )
}