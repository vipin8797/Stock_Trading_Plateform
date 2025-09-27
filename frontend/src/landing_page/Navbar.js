import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ backgroundColor: "#fff" }}>
            <Link className="navbar-brand mx-5" to={"/"}>
                <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="logo" />
            </Link>
           

                <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active fs-5" to={"/signup"}>
                                SignUp <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" to={"/about"}>About</Link>
                        </li>
                          <li className="nav-item">
                            <Link className="nav-link active fs-5" to={"/product"}>Product</Link>
                        </li>
                          <li className="nav-item">
                            <Link className="nav-link active fs-5" to={"/pricing"}>Pricing</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active fs-5" to={"/support"}>Support</Link>
                        </li>
                       
                    </ul>
            </form>
                </div>
        </nav>
    );
}

export default Navbar;
