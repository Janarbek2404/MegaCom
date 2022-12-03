import React from "react";
import MyButton from "./MyButton";
const Post1=(props)=>{
    return(
        <>
            <div className="w3-card-4 w3-margin w3-white">
                <img src={`${props.imgPost}`} alt="Nature" style={{width: '100%'}} />
                <div className="w3-container">
                <h3><b>{`${props.namePost}`}</b></h3>
                <h5>{`${props.titlePost}`}, <span className="w3-opacity">April 7, 2014</span></h5>
                </div>
                <div className="w3-container">
                <p>{`${props.textPost}`}</p>
                <div className="w3-row">
                    <div className="w3-col m8 s12">
                    <MyButton color="w3-red" text="Далее"/>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                    <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">0</span></span></p>
                    </div>
                </div>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Post1;