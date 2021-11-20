import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faInstagram,faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ResMenu from './resMenu';


function Nav(){

    const [resMenu,setResMenu] = useState(false)
    
    return(
        <div>
            <div className="nav-container sticky-top">
                <nav className="navbar navbar-expand navbar-dark bg-dark bg-gradient sticky-top">
                    <div className="nav-content container-fluid ">
                        <div className="collapse navbar-collapse justify-content-between">
                            <h1 className="logo-nav">Disstape</h1>
                            <ul className={(window.innerWidth > 768)? "d-none" : "social-nav d-flex gap-3"}>
                                <li><a target="_blank" href="//facebook.com"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                                <li><a target="_blank" href="//instagram.com"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a target="_blank" href="//twitter.com"><FontAwesomeIcon icon={faTwitterSquare}/></a></li>
                            </ul>
                            <FontAwesomeIcon
                                onClick={() => setResMenu(!resMenu)} 
                                    icon={faBars} 
                                    className={(window.innerWidth > 768)? "d-none" : "text-white fs-4"}
                            />
                            <ul className={(window.innerWidth > 768)? "navbar-nav me-auto mb-2 mb-lg-0" : "d-none"}>
                                
                                <li className="nav-item nav-link active btn fw-bold">Home</li>
                                <li className="nav-item nav-link btn fw-bold">Mixtapes</li>
                                <li className="nav-item nav-link btn fw-bold">Singles</li>
                                <li className="nav-item nav-link btn fw-bold">Uncoming</li>
                                <li className="nav-item nav-link btn fw-bold">News</li>
                                

                            </ul>
                            <form className={(window.innerWidth > 768)? "d-flex justify-content-end" : "d-none"}>
                                <input className="form-control form-control-sm me-sm-2 shadow-none " type="text" placeholder="Search" />
                                <button className="btn btn-secondary py-0 px-1 btn-sm me-sm-2" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            
            </div>
            <ResMenu menustate={resMenu}/>
        </div>
        
    )
}

export default Nav;

//<ResponsiveNav display={resMenu}/> RESPONSIVE MENU

//<Link to="/" style={{ textDecoration: 'none' }}></Link>  LINK TO HOME