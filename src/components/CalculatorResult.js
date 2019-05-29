import React, {Component} from "react";

const CalculatorResult = (props) => {
    return (
        <>
        <h2>The maximum mortgage you can afford is {props.maxMortgage}.</h2>
        </>
    )
}

export default CalculatorResult;