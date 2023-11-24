import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Teacher from './components/Teacher';

function App() {
  return (
    <div className="App">
        <Student student_name="Phùng Duy Hùng"/>
        <Student student_name="Nguyễn Thị Hương"/>
        <Teacher teacher_name="Nguyễn Duy Hoàng"/>
        <Teacher teacher_name="Trịnh Quang Hoà"/>
    </div>
  );
}

export default App;
