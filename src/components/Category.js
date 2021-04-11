import React,{useState} from "react";

import grocery from "../images/groceries.svg";
import icecream from "../images/ice-cream.svg";
import add from "../images/add.svg";


const dummy  = [
    {key:2, title:"Flour"},
    {key:3, title:"Sauces"},
    {key:4, title:"Spices"},
    {key:5, title:"Snacks"},
    {key:7, title:"Breakfast"},
    {key:8, title:"Dinner"},
    {key:9, title:"Rice"},
]

const products = [
    {id:1, title:"Icecream 1", price:200},
    {id:2, title:"Icecream 2", price:350},
    {id:3, title:"Icecream 3", price:890},
    {id:4, title:"Icecream 4", price:750},
]


const Category = ( {setTotal,total,setCost,cost} ) => {

    const [item, setItem] = useState(0);
    const [price,setPrice] = useState(0);

    const handleCart = (e)=> {
        setCost(price + products[e.target.value].price)
        setTotal(item+1)
        setItem(total + 1);
        setPrice(cost + products[e.target.value].price)
        console.log(item)
    }
   
    console.log(item); 
    console.log()

    return ( 
        <>
            <div className="categorySection">
                <p style={{fontSize:"1.8rem",fontWeight:"500", margin:"0 0 10px 0"}}>Categories</p>
                <section className="categoryList">
                        <div style={{backgroundColor:"rgb(255, 247, 137)"}} className="categoryCard">
                            <img src={grocery} alt="grocery" style={{margin:"8px 20px 0px 28px ",width:"40%", height: "40%"}} />
                            <p style={{textAlign:"center", margin:"5px"}}>Dairy</p>
                        </div>
                    {dummy.map(dum => (
                        <div className="categoryCard">
                            <img src={grocery} alt="grocery" style={{margin:"5px 20px 0px 28px ",width:"40%", height: "40%"}} />
                            <p style={{textAlign:"center", margin:"5px"}} key={dum.key}>{dum.title}</p>
                        </div>
                        
                    ))}
                </section> 

                <section className="productList">
                    <p style={{fontSize:"1.8rem",fontWeight:"600", margin:"0 0 10px 0"}}>Dairy</p>

                    <div className="products">
                        {products.map(product => (
                            <div className="item" key={product.id}>
                                <img src={icecream} alt="icecream" className="productImage"/>
                                <p className="productTitle">{product.title}</p>
                                <p style={{fontWeight:"600", fontSize:"1.1rem"}}><span style={{fontWeight:"400",fontSize:"0.9rem"}} >Price: </span>${product.price}</p>
                                <button className="add" value={product.id} onClick={handleCart} >
                                    <img src={add}  alt="add" style={{width:"60%", height: "60%"}}/>
                                    <option value={product.id}>Add to Basket</option>
                                </button>
                            </div>
                        ))}
                        

                    </div>
                </section>
            </div>
            
        </>
     );
     
}
 
export default Category;