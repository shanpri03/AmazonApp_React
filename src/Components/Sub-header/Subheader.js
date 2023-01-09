import React , {useEffect, useState} from "react"
import "./Subheader.css"
export default function Subheader(){
    let [hover, sethover] = useState(false);
    let hoverstyle = {border:hover ?"1px solid black" : "none"}
    const handleHoverin = () =>
    {sethover(true)}
    const handleHoverout = () =>
    {sethover(false)}
    useEffect(()=> {
        let subheader=document.querySelector(".subheader");
        let child_of_subheader=subheader.children;
        for(let i=0;i<child_of_subheader.length;i++){
            child_of_subheader[i].addEventListener("mouseover",(e)=>{
                 child_of_subheader[i].style.border="1px solid black"
             })
             child_of_subheader[i].addEventListener("mouseout",(e)=>{
                 child_of_subheader[i].style.border="none"
             })
            }
    }
            
        , [])
return(
    <div className="subheader" >
        <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style = {hoverstyle}><i className="fa fa-list"></i>All</div>
        <div>Today's Deals</div>     
        <div >Customer Service</div>
        <div >Registry</div>
        <div >Gift Cards</div>
        <div >Sell</div>
    </div>
    );
}
