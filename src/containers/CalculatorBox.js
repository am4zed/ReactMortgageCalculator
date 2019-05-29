import React, {Component} from "react";
import CalculatorResult from "../components/CalculatorResult"
import CalculatorForm from "../components/CalculatorForm"

class CalculatorBox extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            salarydata: [],
            maximumMortgage: 0,
            deposit: 0 
        }
        this.calculateMaxMortgage = this.calculateMaxMortgage.bind(this);
        this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.salarydata !== prevState.salarydata || this.state.deposit !== prevState.deposit ) 
            {
            this.calculateMaxMortgage();
            }
    }

    calculateMaxMortgage(){
        let mortgageValue;
        const salary1 = this.state.salarydata[0]
        const salary2 = this.state.salarydata[1]
        if (salary2 === 0 || salary2 === ""){
            mortgageValue = salary1 * 4
        }
        else {
        mortgageValue = (salary1 * 3) + salary2;
        }
        const deposit = this.state.deposit;
        const maximumMortgage = mortgageValue + deposit;
        this.setState( {maximumMortgage} );
    }

    handleSalarySubmit({salarydata}, {deposit}, {expenses}){
        console.log(salarydata)
        this.setState({salarydata});
        this.setState({deposit});
        this.setState({expenses});
    }
    
    render(){
        return (
            <div className="calculator-box">
            <h2>Mortgage Calculator</h2>
            <CalculatorForm onFormSubmit={this.handleSalarySubmit}/>
            <CalculatorResult maxMortgage={this.state.maximumMortgage}/>
            </div>
        );
    }
}

export default CalculatorBox;