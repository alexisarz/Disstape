import React from "react";

function News(props){
    return(
        <div className="d-flex bg-primary border rounded new-cont">
            <img className="new-img" src={props.img}></img>
            <div className="new-body">
                <h5 >{props.title}</h5>
                <p >{props.body}</p>
            </div>
        </div>
    )
}

export default News;