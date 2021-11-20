import React from "react";
import data from '../data.json';
import Subtittle from "../common/subtittle";
import Card from "../common/card";

function BestRankList(){
    return(
        <div>
            <Subtittle subtittle="Top Ranked"/>
            <ul className="card-list">
                {data.map(({img, name, duration, year, rating}) => {
                        if(rating > 3){
                            return <Card img={img} name={name} duration={duration} year={year} rating={rating}/>
                        }
                })}
            </ul>
        </div>
    )
}

export default BestRankList;