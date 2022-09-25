import React from "react";
import { CenterImg } from "../CenterImg";
import '../MyApp.css'
import Footer from "../footer";


  function MyApp () {
    return (
        <div>
        
        <div id='#myDiv' ><CenterImg {...{rounded: true}}/><Footer/></div>
        
        
        {/* <p>Hello React</p> */}
        </div>
    )
}

export default MyApp;

