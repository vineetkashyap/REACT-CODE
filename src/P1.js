import React from "react"

function clickhandler(){
    console.log("My name is Vaibhavi Kashyap")
}
function Student(props){
         return (
             <>
                 <h1>Avengers</h1>
                 <h1>Avengers the age of ultron</h1>
                 <button onClick={clickhandler}>Click me</button>
             </>
         )
    
}export default  Student;