import React from "react";
import data from "../data.json"
import Subtittle from "./subtittle";
import Card from "./card"

function HotList(){
    return(
        <div>
            <Subtittle subtittle="Latest"/>
            <ul className="card-list">
                {data.map(({img, name, duration, year, rating, latest}) => {
                        if(latest === true){
                            return <Card img={img} name={name} duration={duration} year={year} rating={rating}/>
                        }
                })}
            </ul>
        </div>
    )
}

export default HotList;