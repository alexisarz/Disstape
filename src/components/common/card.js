import React from "react";

function Card(props){
    return(
        <div>
            <div className="card-container">
                <img className= "img-card" alt={props.name} src={props.img}></img>
                <h4>{props.name}</h4>
                <p>{props.year}</p>
                <p className="duration-time">{props.duration}</p>
                <p>Rating: {props.rating}</p>
            </div>
        </div>
    )
}

export default Card;