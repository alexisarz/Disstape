import React from "react";

function ResMenu(props){
    return(
        <nav className={(props.menustate === false) ? "navbar navbar-expand navbar-dark bg-dark bg-gradient sticky-top resmenu-off" : "navbar navbar-expand navbar-dark bg-dark bg-gradient sticky-top resmenu-on" }>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item nav-link active btn ">Home</li>
                <li className="nav-item nav-link btn ">Mixtapes</li>
                <li className="nav-item nav-link btn ">Singles</li>
                <li className="nav-item nav-link btn ">Uncoming</li>
                <li className="nav-item nav-link btn ">News</li>
            </ul>
        </nav>
    )
}

export default ResMenu;