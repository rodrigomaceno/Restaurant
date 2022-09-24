import React from "react";
import MyNavbar from "./myNavbar";
import { CenterImg } from "./CenterImg";
import './MyApp.css'
import Footer from "./footer";


export function MyApp () {
    return (
        <div>
        <MyNavbar/>
        <div id='#myDiv' ><CenterImg {...{rounded: true}}/><Footer/></div>
        
        
        {/* <p>Hello React</p> */}
        </div>
    )
}

