
import React from "react";
import Stars from "./stars";

const ReviewContent=()=>{
    return(
        <div className="my-[40px]">
            <div className="flex">
             <Stars/>
            <div>day month year</div>
            </div>

            <span>Bought: size XL</span>
            <p>The quality for the product is really good, although the sleeve length is a couple of inches short as well as the length of the hoodie too is an inch short. The thickness of the hoodie is not much thick. Overall the hoodie is decent.</p>
        </div>
       
    )
}

export default ReviewContent;