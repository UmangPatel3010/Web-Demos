import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'

export default function Student() {
    const [studentList, setStudentList] = useState([]);
    const navigate = useNavigate();

    const apiUrl = "https://65ded87cff5e305f32a0a13c.mockapi.io/student"
    useEffect(() => {
        fetch(apiUrl, { method: 'GET' }).then((res) => {
            return res.json();
        }).then((data) => {
            setStudentList(data);
        })
    }, [])

    function deleteStudent(stu) {
        fetch(apiUrl + "/" + stu.id, { method: 'DELETE' }).then((res) => {
            return res.json();
        }).then((data) => {
            setStudentList(studentList.filter((student) => stu.id !== student.id));
        })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="card text-center p-0 col-2 m-3 card_size_student" >
                        <div class="card-header">
                            Add a New Student
                        </div>
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <Link to="/setstudent" className="ms-3">
                                <img src="https://cdn3.iconfinder.com/data/icons/databases-2/512/new_database-512.png" width={200} alt="..." />
                            </Link>

                        </div>
                    </div>
                    {studentList.map((student) =>
                        <>
                            <div id="card_1" class="card p-0 col-2 m-3 card_size_student">
                                <img src={student.StudentImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{student.StudentName}</h5>
                                    <p class="card-text">{student.StudentDescription}</p>
                                    <div class="row mx-2">
                                        <Link to={"/studentdetails/" + student.id} class="btn btn-primary col">See Details</Link>
                                        <div class="col-1" />
                                        <button class="btn btn-danger col" onClick={() => { deleteStudent(student) }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div >
        </>);
}