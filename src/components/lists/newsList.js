import React from "react";
import newsdata from "../news.json";
import News from "../common/news";

function NewsList(){
    return(
        <div className="new-list-cont mt-4">
            <h5>Hot News</h5>
            <ul>
                {newsdata.map(({id, title, body, img}) => {return <News key={id} title={title} body={body} img={img}/>} )}
            </ul>
        </div>
    )
}

export default NewsList;