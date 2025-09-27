import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ backgroundColor: "#fff" }}>
            <a className="navbar-brand mx-5" href="#">
                <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="logo" />
            </a>
           

                <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link active fs-5" href="#">
                                SignUp <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fs-5" href="#">About</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link active fs-5" href="#">Product</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link active fs-5" href="#">Pricing</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active fs-5" href="#">Support</a>
                        </li>
                       
                    </ul>
            </form>
                </div>
        </nav>
    );
}

export default Navbar;
