import React,{useState} from "react";
import Navbar from "../components/Navbar";

import SideBar from "../components/SideBar";
import Category from "../components/Category";
import Footer from "../components/Footer";


const Home = () => {

    const [total,setTotal] = useState(0);
    const [cost, setCost] = useState(0)

    return (
        <>
            <Navbar total={total} setTotal={setTotal} setCost={setCost} cost={cost}/>
            <div className="mainBody">
                <div className="grid">
                    <SideBar/>
                </div>
                <div>
                    <Category setTotal={setTotal} total={total} setCost={setCost} cost={cost}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
 
export default Home;