import React from "react";
import ComA from "../COMPONENT/COMA";

const Props = () => {
    let name = "skillqode"
    let arr = ["css","html"]
    let obj = {key1:"srushti",key2:"gangani"}

    return (
        <div>
            <h1 className="headtext">this is props component</h1>

            <ComA/>
        </div>
    )
}

export default Props