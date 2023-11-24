import React from "react";

class Teacher extends React.Component{

    render(){
        const name = this.props.teacher_name;
        return (
            <div>
                <h2>Name: {name}</h2>
                <p>Age: 18</p>
            </div>
        );
    }
}
export default Teacher;