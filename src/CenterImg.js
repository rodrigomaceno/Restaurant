import React from "react";
import Image from 'react-bootstrap/Image'
import food from './food.jpg'

export function CenterImg (){
    return (
        <img id="mainImg" src={food} class="img-fluid"/>
        // <Image > </Image>
    )
}