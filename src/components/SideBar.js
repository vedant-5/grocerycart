import React from "react";


import location from "../images/pin.svg"
import home from "../images/home.svg";
import deal from "../images/hot-deal.svg";
import checklist from "../images/checklist.svg";
import grocery from "../images/groceries.svg";
import chef from "../images/chef (2).svg";
import recipies from "../images/cook-book.svg";


const details = [
    {key:"1", title:"Home",img:"home"},
    {key:"2", title:"Best Deals",img:"deal"},
    {key:"3", title:"Recipies",img:"recipies"},
    {key:"4", title:"Grocery List",img:"checklist"},
    {key:"5", title:"",img:"Chef", img:"chef"},    
]


const SideBar = () => {
    return ( 
        <>
            <div className="sidebar">
                <section className="locationBox">
                    <div className="location">
                        <img alt="location" style={{width:"60%", height:"50%"}} src={location} />
                        <p>Location</p> 
                    </div>
                </section>

                <section style={{marginTop:"40px"}}>
                  
                
                        <div className="details">
                            <img alt="home" style={{width:"50%", height:"50%"}} src={home} />
                            <p style={{fontWeight:"800",fontSize:"1.3rem"}}>Home</p> 
                            
                        </div>
            
                        <div className="details">
                            <img alt="deal" style={{width:"50%", height:"50%"}} src={deal} />
                            <p>Best Deals</p> 
                        </div>

                        <div className="details">
                            <img alt="recipe" style={{width:"50%", height:"50%"}} src={chef} />
                            <p>Recipes</p> 
                        </div>

                        <div className="details">
                            <img alt="list" style={{width:"50%", height:"50%"}} src={checklist} />
                            <p>Your Grocery List</p> 
                        </div>

                        <div className="details">
                            <img alt="chef" style={{width:"50%", height:"50%"}} src={recipies} />
                            <p> Your Recipies</p> 
                        </div>

                </section>
                <section className="kitchen">
                    
                </section>
            </div>
        </>
     );
}
 
export default SideBar;