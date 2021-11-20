import React from "react";
import HotList from "../common/hotlist";
import BestRankList from "../lists/bestRankList";


function HomeScreen(){
    return(
        <div className={(window.innerWidth > 768)? "screens" : "screens w-100" }>
            <HotList/>
            <BestRankList/>
        </div>
    )
}

export default HomeScreen;