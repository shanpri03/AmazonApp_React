import React from "react"
import "./Header.css"
export default function Header(){
return(
<div className ="header">
        <div className="section1">
            <div className="logo">
                <img src="/images/meesho.png" alt="meesho - logo"/>
            </div>
            <div className="deliver">
                <div className="icon">
                    <i className ="fa fa-map-marker"></i>
                </div>
                <div classNameName="deliver-content">
                    <div>Deliver to</div>
                    <div>India</div>
                </div>
            </div>
        </div>
       <div className="section2" >
            <div className="searchbox">
                <input type="text"/>
            </div>
            
       </div>
       <div className="section3" >
          <div className="Signin">
            <button>Sign In</button>
          </div>
          <div className="orders">
            <span>Returns</span>
            <span>& Orders</span>
         </div>
         <div className="cart">
            <>
         </>
        </div>
       </div>
    </div>

);
}

