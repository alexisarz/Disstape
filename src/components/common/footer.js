import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faInstagram,faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="nav-container footer">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div className="d-flex  nav-content footer-content container-fluid">
                    <a className="navbar-brand" href="#">
                         <h1 className="footer-logo">Disstape</h1>
                    </a>
                    <div>
                        <ul className="pt-3 btn-group"/*"d-flex gap-3 justify-content-between"*/>
                            <li className="btn nav-item nav-link">Privacy</li>
                            <li className="btn nav-item nav-link">Terms</li>
                            <li className="btn nav-item nav-link">Contact Mail</li>

                        </ul>
                    </div>

                    <div>
                        <ul className={(window.innerWidth < 768)? "d-none" : "social-footer d-flex gap-3"}>
                            <li><a target="_blank" href="//facebook.com"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                            <li><a target="_blank" href="//instagram.com"><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a target="_blank" href="//twitter.com"><FontAwesomeIcon icon={faTwitterSquare}/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Footer;




/*<ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
        */