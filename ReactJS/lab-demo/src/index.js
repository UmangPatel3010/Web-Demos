import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faculty from './components/Faculty';
import Header from './components/Header';
import "./index.css"
import Company from './components/Company';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Student from './components/Student';
import StudentDetails from './components/StudentDetails';
import SetStudent from './components/SetStudent';

var faculties = [
  {
    "id": "1",
    "FacultyName": "Dr. Gopi Sanghani",
    "FacultyDesignation": "Dean - School of Computer Science",
    "FacultyEducationQualification": "Ph.D. , M.E. (CE)",
    "FacultyExperience": "22+ Years",
    "FacultyWorkingSince": "Jul-2012",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg"
  },
  {
    "id": "2",
    "FacultyName": "Dr. Nilesh Gambhava",
    "FacultyDesignation": "Professor",
    "FacultyEducationQualification": "Ph.D. , M.E. (CE)",
    "FacultyExperience": "19+ Years",
    "FacultyWorkingSince": "Jul-2009",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  },
  {
    "id": "3",
    "FacultyName": "Dr. Pradyumansinh Jadeja",
    "FacultyDesignation": "Associate Professor",
    "FacultyEducationQualification": "Ph.D. , M.E. (CE)",
    "FacultyExperience": "17+ Years",
    "FacultyWorkingSince": "Jul-2009",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
  },
  {
    "id": "4",
    "FacultyName": "Prof. Maulik Trivedi",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.Tech. (CSE)",
    "FacultyExperience": "14+ Years",
    "FacultyWorkingSince": "Jun-2009",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
  },
  {
    "id": "5",
    "FacultyName": "Prof. Dixita Kagathara",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.Tech. (Web Technology)",
    "FacultyExperience": "13+ Years",
    "FacultyWorkingSince": "Jul-2009",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg"
  },
  {
    "id": "6",
    "FacultyName": "Prof. Rupesh Vaishnav",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.E. (CE)",
    "FacultyExperience": "14+ Years",
    "FacultyWorkingSince": "May-2013",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg"
  },
  {
    "id": "7",
    "FacultyName": "Prof. Swati Sharma",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.Tech. (CSE)",
    "FacultyExperience": "14+ Years",
    "FacultyWorkingSince": "May-2013",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg"
  },
  {
    "id": "8",
    "FacultyName": "Prof. Arjun Bala",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.Tech. (CSE)",
    "FacultyExperience": "12+ Years",
    "FacultyWorkingSince": "Jul-2013",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"
  },
  {
    "id": "9",
    "FacultyName": "Prof. Mayur Padia",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.E. (CE)",
    "FacultyExperience": "13+ Years",
    "FacultyWorkingSince": "Jul-2011",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg"
  },
  {
    "id": "10",
    "FacultyName": "Prof. Vijay Shekhat",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.E. (CE)",
    "FacultyExperience": "10+ Years",
    "FacultyWorkingSince": "Jun-2012",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/16---28-04-2023-02-08-00.jpg"
  },
  {
    "id": "11",
    "FacultyName": "Prof. Naimish Vadodariya",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.E. (CE)",
    "FacultyExperience": "9+ Years",
    "FacultyWorkingSince": "Jun-2015",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg"
  },
  {
    "id": "12",
    "FacultyName": "Prof. UmeshKumar Thoriya",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.Tech. (CSE)",
    "FacultyExperience": "9+ Years",
    "FacultyWorkingSince": "Jul-2015",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/221---28-04-2023-02-08-50.jpg"
  },
  {
    "id": "13",
    "FacultyName": "Prof. Jayesh Vagadiya",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.E (CE)",
    "FacultyExperience": "7+ Years",
    "FacultyWorkingSince": "Jul-2015",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg"
  },
  {
    "id": "14",
    "FacultyName": "Prof. Krunal Vyas",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.Tech.(ICT), B.E. (EC)",
    "FacultyExperience": "8+ Years",
    "FacultyWorkingSince": "Jul-2018",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg"
  },
  {
    "id": "15",
    "FacultyName": "Prof. Jay Dhamsaniya",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "M.E. (E.C.), B.Tech. (E.C.)",
    "FacultyExperience": "10+ Years",
    "FacultyWorkingSince": "Jul-2012",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg"
  },
  {
    "id": "16",
    "FacultyName": "Prof. Mehul Bhundiya",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "BE (CE), ME (CE)",
    "FacultyExperience": "8+ Years",
    "FacultyWorkingSince": "Aug-2018",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/294---28-04-2023-02-09-43.jpg"
  },
  {
    "id": "17",
    "FacultyName": "Prof. Shruti Maniar",
    "FacultyDesignation": "Assistant Professor",
    "FacultyEducationQualification": "ME(CE), BE(IT)",
    "FacultyExperience": "7+ Years",
    "FacultyWorkingSince": "Dec-2021",
    "FacultyImage": "https://darshan.ac.in/U01/Faculty-Photo/336---28-04-2023-01-34-37.jpg"
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

function Addfaculty() {
  const navigate = useNavigate();
  // const [facultyList, setFacultylist] = useState(faculties);
  const [faultyData, setfaultyData] = useState({ id: faculties.length });
  function facultydataHandler(e) {
    setfaultyData({ ...faultyData, [e.target.name]: e.target.value });
  }
  function addfaculty() {
    // console.log(facultyList);
    // setFacultylist([...facultyList, faultyData]);
    // console.log(facultyList);
    // faculties = [...facultyList]
    faculties.push(faultyData);
    // console.log(faculties);
    navigate(-1);
  }

  return <>
    <div className="container mt-5">
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <label htmlFor="FacultyName"><h4>Faculty Name:&nbsp;&nbsp;</h4></label>
        <input type="text" size="50" name="FacultyName" placeholder="Enter Name" onChange={(e) => { facultydataHandler(e) }} /><br />
        <label htmlFor="FacultyDesignation"><h4>Faculty Designation :&nbsp;&nbsp;</h4></label>
        <input type="text" size="50" name="FacultyDesignation" placeholder="Enter Designation" onChange={(e) => { facultydataHandler(e) }} /><br />
        <label htmlFor="FacultyEducationQualification"><h4>Faculty Education Qualification:&nbsp;&nbsp;</h4></label>
        <input type="text" size="50" name="FacultyEducationQualification" placeholder="Enter Education Qualification" onChange={(e) => { facultydataHandler(e) }} /><br />
        <label htmlFor="FacultyExperience"><h4>Faculty Experience:&nbsp;&nbsp;</h4></label>
        <input type="text" size="50" name="FacultyExperience" placeholder="Enter Experience" onChange={(e) => { facultydataHandler(e) }} /><br />
        <label htmlFor="FacultyWorkingSince"><h4>Faculty Working Since:&nbsp;&nbsp;</h4></label>
        <input type="text" size="50" name="FacultyWorkingSince" placeholder="Enter Working Since" onChange={(e) => { facultydataHandler(e) }} /><br />
        <label htmlFor="FacultyImage"><h4>Faculty Image:&nbsp;&nbsp;</h4></label>
        <input type="text" size="50" name="FacultyImage" placeholder="Enter Image" onChange={(e) => { facultydataHandler(e) }} /><br />
        <input className="btn btn-primary ms-3" type="submit" onClick={() => { addfaculty() }} value="Submit" />
        <input className="btn btn-warning ms-5" type="reset" value="Reset" />
      </form>
    </div>
  </>
}

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/student" element={<Student />} />
          <Route path="/studentdetails/:id" element={<StudentDetails />} />
          <Route path="/setstudent/:id" element={<SetStudent />} />
          <Route path="/setstudent/" element={<SetStudent />} />
          <Route path="/faculty" element={<Faculty array={faculties} />} />
          <Route path="/company" element={<Company />} />
          <Route path="/addfaculty" element={<Addfaculty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

