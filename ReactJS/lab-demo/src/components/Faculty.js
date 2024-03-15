import { useState } from "react";

export default function Faculty(props) {
    const [facultiyList, setFacultyList] = useState(props.array);
    console.log(facultiyList);

    function deleteFaculty(index) {
        setFacultyList(facultiyList.filter((fac) => index !== fac.id));
    }
    return (
        <div className="container">
            <div className="row">
                {facultiyList.map((faculty) =>
                    <>
                        <div className="card p-0 col-2 m-3 card_size_faculty">
                            <img src={faculty.FacultyImage} className="card-img-top" alt="..." />
                            <div className="card-body text-center mb-0">
                                <h5 className="card-title ">{faculty.FacultyName}</h5>
                                <div className="card-text text-danger mb-0">{faculty.FacultyDesignation}</div>
                            </div>
                            <div>
                                <hr className="border border-1 opacity-75 hr_line mt-0" />
                                <div className="text-center">
                                    {faculty.FacultyEducationQualification}
                                </div>
                                <hr className="border border-1 opacity-75 hr_line mb-1" />
                            </div>
                            <div className="container mb-3">
                                <div className="row mb-2">
                                    <div className="col font_size fw-medium">
                                        <div className=" text-center text-wrap">
                                            Experience
                                        </div>
                                    </div>
                                    <div className="col-6 font_size fw-medium">
                                        <div className="text-center">
                                            Working Since
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center fs_small fw-medium text-primary bg-info-subtle">
                                            {faculty.FacultyExperience}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center fs_small fw-medium text-secondary bg-dark-subtle">
                                            {faculty.FacultyWorkingSince}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body text-center mb-3 p-0">
                                <button onClick={() => { deleteFaculty(faculty.id) }} className="btn btn-danger me-4 fw-semibold">Delete</button>
                                <a href="#" className="card-link link_text fw-semibold">View Profile</a>
                            </div>
                        </div >
                    </>
                )}
            </div>
        </div >
    );
}