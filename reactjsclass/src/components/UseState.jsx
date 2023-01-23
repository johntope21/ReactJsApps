import React, {useState} from "react";
import '../App.css';
import Header from "./assets/Header";

const Header = ()=>{
    let toggle = document.querySelector(".toggle");

    function handletoggle(){
       setCount (count++);

       document.getElementById("btn").addEventListener("click", ()=>{
        toggle.classList.toggle("mobile")
    })
    }

    
    return(
        <div>

        </div>
    )
}

export default Header;