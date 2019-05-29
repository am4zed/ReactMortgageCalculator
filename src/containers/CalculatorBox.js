import React, {Component} from "react";
import CalculatorResult from "../components/CalculatorResult"
import CalculatorForm from "../components/CalculatorForm"

class CalculatorBox extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            salaryData: 0,
            maximumMortgage: 0
        }
        this.calculateMaxMortgage = this.calculateMaxMortgage.bind(this);
        this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.salaryData !== prevState.salaryData) {
            this.calculateMaxMortgage();
        }
    }

    calculateMaxMortgage(){
        const salary = this.state.salaryData;
        const maximumMortgage = salary * 3;
        this.setState( {maximumMortgage : maximumMortgage} );
    }

    handleSalarySubmit(combinedSalary){
        const salaryData = combinedSalary.salaryData;
        this.setState({salaryData});
    }
    
    render(){
        return (
            <div className="calculator-box">
            <h2>Mortgage Calculator</h2>
            <CalculatorForm onSalarySubmit={this.handleSalarySubmit}/>
            <CalculatorResult maxMortgage={this.state.maximumMortgage}/>
            </div>
        );
    }
}

export default CalculatorBox;