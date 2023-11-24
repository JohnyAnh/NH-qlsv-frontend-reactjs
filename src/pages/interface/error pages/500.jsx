import React from 'react';

const InternalServerError = () => (
    <body className="border-top-wide border-primary d-flex flex-column">
        <script src="./dist/js/demo-theme.min.js?1684106062"></script>
        <div className="page page-center">
            <div className="container-tight py-4">
                <div className="empty">
                    <div className="empty-header">500</div>
                    <p className="empty-title">Oops… You just found an error page</p>
                    <p className="empty-subtitle text-muted">
                        We are sorry but our server encountered an internal error
                    </p>
                    <div className="empty-action">
                        <a href="./." className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                            Take me home
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <script src="./dist/js/tabler.min.js?1684106062" defer></script>
        <script src="./dist/js/demo.min.js?1684106062" defer></script>
    </body>
);

export default InternalServerError;
