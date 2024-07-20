import { LuShoppingCart } from "react-icons/lu";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

import "./Sidebar.css";

function Sidebar({ handleChange }) {

    return (
        <>
            <section className="sideBar">
                <div className="logo-container">
                    <h1>
                        👞👟🥾🥿👠👡👢
                    </h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    )
}

export default Sidebar
