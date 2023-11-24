import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";

class Classroom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teacher: {
                name: "Trịnh Quang Hoà",
                age: 18
            },
            students:[
                {
                    name:"Phùng Duy Hùng"
                },
                {
                    name:"Nguyễn Thị Hương"
                },
                {
                    name: "Trịnh Văn Phúc"
                }
            ]
        }
    }

    render(){
        const teacher = this.state.teacher;
        const students = this.state.students; // array
        return (
            <div className="container">
                <h2>T2210M</h2>
                <h3>Giáo viên:</h3>
                <Teacher teacher={teacher}/>
                <h3>Danh sách sinh viên</h3>
                <div className="row">
                    {
                        students.map((e,i)=>{
                            return (
                                <div key={i} className="col-6">
                                    <Student  student_name={e.name}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Classroom;