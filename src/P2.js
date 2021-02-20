
import React ,{Component} from "react";
class Student extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            roll : this.props.roll
        }
       
    }
    ClickHander(name,e){
        console.log(name)
        console.log(e)
        
    }
    

    render(){
        return (
            <>
                 <h1>your name is {this.state.name} and your roll is {this.state.roll}  </h1>
                 <button onClick={e =>{this.ClickHander(this.state.name,e)}}>click me</button>
            </>
        )
    }
}

export default Student;