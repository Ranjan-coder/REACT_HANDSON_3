import React, {Component} from "react"

class Form extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            department : '',
            rating : "" ,
            stuData : []
        }
    }

    handleChange = (e)=>{
        this.setState({[e.target.name] : e.target.value}) 
        // console.log(e.target.value.length);
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const tempObj = {
            name : this.state.name,
            department : this.state.department,
            rating : this.state.rating
        }


        this.state.stuData.push(tempObj)
        this.setState({
            stuData : this.state.stuData
        })

        // this part will make the form blank after submit
        this.setState({
            stuData : this.state.stuData ,
            name : "",
            department : "" ,
            rating : ""
        })

        console.log(this.state.stuData);
    }

    render(){
        return(
            <>
            <form>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="off" required /><br/>
            <label htmlFor="dept">Department : </label>
            <input type="text" id="dept" name="department" value={this.state.department} onChange={this.handleChange} autoComplete="off" /><br/>
            <label htmlFor="rating">Rating : </label>
            <input type="number" id="rating" name="rating" value={this.state.rating} onChange={this.handleChange} autoComplete="off" /><br/>
            <button onClick={this.handleSubmit}>Submit</button>
            </form>


            <div>
            {this.state.stuData.map((item,index)=>{
                console.log(item);
                return(
                    <div key = {index}>
                        {/* <p>index: {index}</p> */}
                        <h1>{item.name}</h1>
                        <h1>{item.department}</h1>
                        <h1>{item.rating}</h1>
                    </div>
                )
            })}
            </div>
            </>
        )
    }

}

export default Form