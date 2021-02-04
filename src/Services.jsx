import React from "react";
import './Css.css';
import Data from "./Data";
import Card from "./Card";



const Servises = () => {
    return (
        <>
            <h1 className="text-center ">Our services</h1>
            <div className="container-fluid card_Container">
               {
                   Data.map((props)=>{
                       return (
                        <Card
                        imgsrc ={props.imgsrc}
                        title = {props.title}
                        />
                       )
                      
                   })
               }
            </div>
        </>
    )
}
export default Servises;