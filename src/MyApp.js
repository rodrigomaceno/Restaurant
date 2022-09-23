import React from "react";
import MyNavbar from "./myNavbar";
import { CenterImg } from "./CenterImg";
import './MyApp.css'
import Footer from "./footer";


export function MyApp () {
    return (
        <>
        <MyNavbar/>
        <div className="container-fluid"><CenterImg {...{rounded: true}}/></div>
        
        <Footer/>
        {/* <p>Hello React</p> */}
        </>
    )
}

