import React from "react";

class Teacher extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: 18
        }
        this.increment = this.increment.bind(this);
    }
    increment(){
        const age = this.state.age;
        this.setState({age:age+1});
    }
    render(){
        const teacher = this.props.teacher;
        return (
            <div>
                <h2>Name: {teacher.name}</h2>
                <p>Age: {teacher.age}</p>
                <button type="button" onClick={this.increment}>Up</button>
            </div>
        );
    }
}
export default Teacher;