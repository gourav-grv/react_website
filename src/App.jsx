import React from "react";
import Home from "./Home.jsx"
import Contact from "./Contact";
import Servises from "./Services"
import About from "./About"
import {Route, Switch } from "react-router";
import Error from "./Error.jsx";
import Navbar from "./Navbar";


const App= () =>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/services" component={Servises}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={Error}/>
        </Switch>
        </>
    )
}
export default App;