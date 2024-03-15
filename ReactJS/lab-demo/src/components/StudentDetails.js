import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom'

export default function Student() {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://65ded87cff5e305f32a0a13c.mockapi.io/student/" + id
    useEffect(() => {
        fetch(apiUrl, { method: 'GET' }).then((res) => {
            return res.json();
        }).then((data) => {
            setStudent(data);
        })
    }, [])
    return (

        <>
            <div className="conatiner">
                <div className="row m-0">
                    <div className="col " />
                    <div class="card col-3 p-0 m-4" >
                        <img src={student.StudentImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{student.StudentName}</h5>
                            <p class="card-text">{student.StudentDescription}</p>
                            <div class="row mx-2">
                                <button onClick={() => { navigate(-1) }} class="btn btn-warning col">Back</button>
                                <div class="col-1" />
                                <Link to={"/setstudent/" + student.id} class="btn btn-primary col">Edit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col" />
                </div>
            </div>
        </>);
}