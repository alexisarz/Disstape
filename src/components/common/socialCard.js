import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faInstagram,faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function SocialCard(props){
    return(
        <div>
            <div className={(props.social ==="fb")? "social-card-fb social-card" : (props.social === "tw") ? "social-card-tw social-card" : (props.social ==="ig") ? "social-card-ig social-card" : " "}>
                <div>
                    <i>
                        <FontAwesomeIcon 
                        icon={(props.social === "fb") ? 
                        faFacebookSquare : (props.social === "tw") ? 
                        faTwitterSquare : (props.social === "ig") ? 
                        faInstagram : ":)"}/>
                    </i>
                    <p>FOLLOW US</p>
                </div>
            </div>
        </div>
    )
}

export default SocialCard;