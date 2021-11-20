import React from "react";
import SocialCard from "./socialCard";

function SocialWidget(){
    return(
        <div className={(window.innerWidth < 768)? "d-none" : "social-container"}>
           <SocialCard social="fb"/> 
           <SocialCard social="tw"/> 
           <SocialCard social="ig"/> 
        </div>
    )
}

export default SocialWidget;