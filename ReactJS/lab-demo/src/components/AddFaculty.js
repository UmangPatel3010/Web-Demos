import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Addfaculty(props) {
    const navigate = useNavigate();
    const [facultyList, setfacultylist] = useState(props.array);
    const [faultyData, setfaultyData] = useState({ id: facultyList.length + 1 });
    function facultydataHandler(e) {
        setfaultyData({ ...faultyData, [e.target.name]: e.target.value });
    }
    function addfaculty() {
        setfacultylist([...facultyList, faultyData]);
        // props.array = facultyList;
        navigate(-1);
    }
    return <>
        <div className="container mt-5">
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label for="FacultyName"><h4>Faculty Name:&nbsp;&nbsp;</h4></label>
                <input type="text" size="50" name="FacultyName" placeholder="Enter Name" onChange={(e) => { facultydataHandler(e) }} /><br />
                <label for="FacultyDesignation"><h4>Faculty Designation :&nbsp;&nbsp;</h4></label>
                <input type="text" size="50" name="FacultyDesignation" placeholder="Enter Designation" onChange={(e) => { facultydataHandler(e) }} /><br />
                <label for="FacultyEducationQualification"><h4>Faculty Education Qualification:&nbsp;&nbsp;</h4></label>
                <input type="text" size="50" name="FacultyEducationQualification" placeholder="Enter Education Qualification" onChange={(e) => { facultydataHandler(e) }} /><br />
                <label for="FacultyExperience"><h4>Faculty Experience:&nbsp;&nbsp;</h4></label>
                <input type="text" size="50" name="FacultyExperience" placeholder="Enter Experience" onChange={(e) => { facultydataHandler(e) }} /><br />
                <label for="FacultyWorkingSince"><h4>Faculty Working Since:&nbsp;&nbsp;</h4></label>
                <input type="text" size="50" name="FacultyWorkingSince" placeholder="Enter Working Since" onChange={(e) => { facultydataHandler(e) }} /><br />
                <label for="FacultyImage"><h4>Faculty Image:&nbsp;&nbsp;</h4></label>
                <input type="text" size="50" name="FacultyImage" placeholder="Enter Image" onChange={(e) => { facultydataHandler(e) }} /><br />
                <input className="btn btn-primary ms-3" type="submit" onClick={() => { addfaculty() }} value="Submit" />
                <input className="btn btn-warning ms-5" type="reset" value="Reset" />
            </form>
        </div>
    </>
}