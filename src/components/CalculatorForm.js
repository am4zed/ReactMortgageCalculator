import React, {Component} from "react";

class CalculatorForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            salary1: 0,
            salary2: 0,
            combinedSalary: 0
        }
        this.handleSalary1Change = this.handleSalary1Change.bind(this)
        this.handleSalary2Change = this.handleSalary2Change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.calculateCombinedSalary = this.calculateCombinedSalary.bind(this)
    }

    handleSalary1Change(evt){
        this.setState({salary1: evt.target.value})
    }

    handleSalary2Change(evt){
        this.setState({salary2: evt.target.value})
    }

    calculateCombinedSalary(){
        const salary1 = parseInt(this.state.salary1)
        const salary2 = parseInt(this.state.salary2)

        const combinedSalary = salary1 + salary2;
        this.setState({combinedSalary: combinedSalary}, () => {
            this.props.onSalarySubmit({salaryData: combinedSalary})
        })
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        this.calculateCombinedSalary();
    }


    render(){
        return (
            <>
            <form className="salary-input" onSubmit={this.handleSubmit}>
                <label for="your-salary">Your salary</label>
                <input 
                type="number" 
                id="your-salary" 
                name="your-salary" 
                placeholder="your salary"
                value={this.state.salary1}
                onChange = {this.handleSalary1Change}
                required/>
        
                <label for="partner-salary">Your partner's salary (optional)</label>
                <input 
                type="number" 
                id="partner-salary" 
                name="partner-salary"
                placeholder="partner's salary (0 if not applicable)" 
                value={this.state.salary2}

                onChange = {this.handleSalary2Change}
                />

                <input type="submit" value="Post"/>
            </form>
            
            </>
        )
    }
}

export default CalculatorForm;