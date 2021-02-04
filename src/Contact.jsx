import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Img from "../src/img/Helpme.png";
import './Css.css';



const Contact = () => {


    const [data, setdata] = useState({
        email: "",
        query: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Your Email Is ${data.email} and query is ${data.query}`)
    }
    return (
        <><h1 className="text-center ">Contact</h1>
            <div className=" form_div">
                <form onSubmit={formSubmit}>
                    <div class="form-row">
                        <div class="form-group ">
                            <label for="inputEmail4">Email</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Email" name="email" value={data.email} onChange={InputEvent} />
                        </div>
                        <div class="form-group ">
                            <label for="inputEmail4">your Query</label>
                            <textarea type="textarea" class="form-control" id="inputEmail4" placeholder="Comment" name="query" value={data.query} onChange={InputEvent} />
                        </div>

                    </div>

                    <hr />
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <hr />
                    <div class="form-group ">

                        <input type="text" class="form-control" id="inputEmail4" placeholder="Email" name="email" value={data.email} onChange={InputEvent} />
                    </div>
                    <br/>
                    <div class="form-group ">

                        <textarea type="textarea" class="form-control" id="inputEmail4" placeholder="Comment" name="query" value={data.query} onChange={InputEvent} />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Contact;