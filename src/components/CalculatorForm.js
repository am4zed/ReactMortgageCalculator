import React, {Component} from "react";

class CalculatorForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            salary1: "",
            salary2: "",
            deposit: "",
            expenses: ""
        }
        this.handleSalary1Change = this.handleSalary1Change.bind(this)
        this.handleSalary2Change = this.handleSalary2Change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDepositChange = this.handleDepositChange.bind(this);
        this.handleExpensesChange = this.handleExpensesChange.bind(this);
    }

    handleSalary1Change(evt){
        const inputtedNum = evt.target.value;
        const salary1 = parseInt(inputtedNum)
        this.setState({salary1})
    }

    handleSalary2Change(evt){
        let salary2
        const inputtedNum = evt.target.value;
        if (inputtedNum){
        salary2 = parseInt(inputtedNum)
        }
        else {
            salary2 = 0
        }
        this.setState({salary2})
    }

    handleDepositChange(evt){
        const inputtedNum = evt.target.value;
        const deposit = parseInt(inputtedNum)
        this.setState({deposit})
    }

    handleExpensesChange(evt){
        const inputtedNum = evt.target.value;
        const expenses = parseInt(inputtedNum)
        this.setState({expenses})
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        const salary1 = this.state.salary1
        const salary2 = this.state.salary2
        const deposit = this.state.deposit;
        const expenses = this.state.expenses;
        this.props.onFormSubmit({salarydata: [salary1, salary2]}, {deposit}, {expenses})
    
    }


    render(){
        return (
            <>
            <form className="salary-input" onSubmit={this.handleSubmit}>
                <label for="your-salary">What is your annual salary?</label>
                <input 
                type="number" 
                id="your-salary" 
                name="your-salary" 
                value={this.state.salary1}
                onChange = {this.handleSalary1Change}
                placeholder = "0"
                required/>

                <label for="partner-salary">What is your partner's annual salary (if applicable)?</label>
                <input 
                type="number" 
                id="partner-salary" 
                name="partner-salary"
                value={this.state.salary2}
                placeholder = "0"
                onChange = {this.handleSalary2Change}
                />

                <label for="deposit">How much money do you have for a deposit?</label>
                <input
                type="number" 
                id="deposit" 
                name="deposit" 
                value={this.state.deposit}
                onChange = {this.handleDepositChange}
                placeholder = "0"
                required/>
                
                <label for="deposit">How much are your monthly expenses?</label>
                <input
                type="number" 
                id="expenses" 
                name="expenses" 
                value={this.state.expenses}
                onChange = {this.handleExpensesChange}
                placeholder = "0"
                required/>


                <input type="submit" value="Post"/>
            </form>
            
            </>
        )
    }
}

export default CalculatorForm;