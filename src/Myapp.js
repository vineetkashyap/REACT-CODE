import React ,{Component} from "react";
import p from 'prop-types';

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Babloo Kashyap",
            roll : this.props.roll
        }
    }
    clickhandler =() =>  {
           console.log('My name is vineet kashyap',this)
    }
    render(){
        return (
                <>
                     <h1>Hello,{this.state.name} and your roll number is {this.state.roll}</h1>
                     <button onClick={this.clickhandler}>Click Me</button>

                </>
        );
    }
}
export default Student;