import React from "react";
import SocialWidget from "./socialWidget";
import NewsList from "../lists/newsList";

function Aside(){
    return(
        <div>
            <aside>
              <SocialWidget/>
              <NewsList/>  
            </aside>
        </div>
    )
}

export default Aside;