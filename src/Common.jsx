import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../src/img/Helpme.png"
import './Css.css';

const Common = (props) => {
    return (
        <>
            <div className="main_div">
                <div className="under_div">
                    <p className="para">Hello And Welcome To Our {props.pageName} Page Of <span className="sitename">Help!mee</span> Page How May I Help You.......!!</p>
                    <h5>Please Visit Our Site</h5><hr/>
                    <NavLink className="NavLink btn btn-outline-danger" to="/contact">Go To Our Page</NavLink>
                </div>
                <div className="under_div_img">
                    <img src={Img} className="animated_img" alt="Image Loading" />
                </div>
            </div>

        </>
    )
}
export default Common;