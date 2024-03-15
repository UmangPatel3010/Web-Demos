import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'

export default function SetStudent() {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://65ded87cff5e305f32a0a13c.mockapi.io/student/"
    useEffect(() => {
        fetch(apiUrl + "/" + id, { method: 'GET' }).then((res) => {
            return res.json();
        }).then((data) => {
            setStudent(data);
        })
    }, [])
    function facultydataHandler(e) {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    function updateStudent() {
        fetch(apiUrl + "/" + id, {
            method: 'PUT',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            navigate(-2);
        })
    }
    function addStudent() {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            navigate(-1);
        })
    }


    return (
        <>
            <div className="container ">
                <div className="row mt-4 mb-3">
                    <label className="col-3 " htmlFor="StudentName"><h4>Student Name:&nbsp;&nbsp;</h4></label>
                    <input type="text" className="col" name="StudentName" value={student.StudentName} onChange={(e) => { facultydataHandler(e) }} /><br />
                </div>
                <div className="row mb-3">
                    <label className="col-3" htmlFor="StudentDescription"><h4>Student Description:&nbsp;&nbsp;</h4></label>
                    <input type="text" className="col" name="StudentDescription" value={student.StudentDescription} onChange={(e) => { facultydataHandler(e) }} /><br />
                </div>
                <div className="row mb-3">
                    <label className="col-3" htmlFor="StudentImage"><h4>Student Image:&nbsp;&nbsp;</h4></label>
                    <input type="text" className="col" name="StudentImage" value={student.StudentImage} onChange={(e) => { facultydataHandler(e) }} /><br />
                </div>
                <div className="row">
                    <div className="col-4" />
                    <button class="col btn btn-primary ms-3" onClick={() => { navigate(-1) }}>Back</button>
                    {id !== undefined && <button class="col btn btn-warning ms-3" onClick={() => { updateStudent() }}>Update</button>}
                    {id === undefined && <button class="col btn btn-warning ms-3" onClick={() => { addStudent() }}>Add</button>}
                    <div className="col-4" />
                </div>
            </div>
        </>
    );
}