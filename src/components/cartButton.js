import React from "react";
import { Link } from "react-router-dom";

function CardButton () {
    // ???
    function d () {
        return(
            <Link to='https://www.google.com'/>
        )
    }
    return (
    // <form class="d-flex ms-auto">
    //       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //       <button class="btn btn-outline-success" type="submit">Search</button>
    //       </form>
          
          
          <button onClick={d} className=" ms-auto btn btn-outline-success" type="submit">Cart</button>
          
    )
}

export default CardButton;
