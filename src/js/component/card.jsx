import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import CardTitle from "./cardTitle";

export function Card(){
    return(
    <div className = "container-fluid d-flex justify-content-center">  
    <div className="card d-flex justify-content-center">
        <div>
        </div>
        <div className="card-header bg-dark">
          <Navbar/>
        </div>
        <div className="card-body">
          <Jumbotron/>
          <CardTitle/>
        </div>
        <div className="card-footer bg-dark text-light d-flex justify-content-center">
           Copyright © Your Website 2019
        </div>
      </div>
  </div> 
    )
}

export default Card;