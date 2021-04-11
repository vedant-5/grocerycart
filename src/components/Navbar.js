import React from "react";

import search from "../images/search.svg"
import logo from "../images/basket.svg"
import man from "../images/man.svg";
import cart from "../images/grocery-cart.svg";


const Navbar = ({total, cost}) => {
    return (  
        <>
            <div className="navbar">
                {/*LOGO*/}
                <section className="logo">
                    <img src={logo} alt="logo"/>
                    GrocerUP
                </section>

                {/*SEARCH BAR*/}
                <section>
                    <div className="search">
                        <img alt="search" style={{width:"50%", height:"50%"}} src={search} />
                        <p>Search the grocery you want...</p> 
                    </div>
                </section>

                <section>
                    <div className="profile">
                        <div className="image">
                            <img alt="man" src={man} style={{width:"100%", height:"100%"}}/>
                        </div>
                        <div>
                            <span style={{fontSize:"1.1rem", fontWeight:"600"}}>Vedant Gandhi</span>
                            <br/>
                            <span style={{fontSize:"0.8rem"}}>365 Club Points</span>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>

                <section>
                <div className="profile">
                        <div className="image">
                            <img  src={cart} alt="cart" style={{width:"90%", height:"90%"}}/>
                        </div>
                        <div>
                            <span style={{fontSize:"1.1rem", fontWeight:"600"}}>$ {cost}</span>
                            <br/>
                            <span style={{fontSize:"0.8rem"}}>{total} items</span>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>






            </div>
        </>
    );
}
 
export default Navbar;