import { Outlet, Link } from 'react-router-dom';
import "../Styles/Layout.css"
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [inputFormat, setInputFormat] = useState({ displayName: "Search By", Format: "Search", isDisabled: true });
    const [searchText, setSearchText] = useState("")
    const [searchitems, setSearchitems] = useState([])
    const [showSearch, setShowSearch] = useState(true)
    console.log(showSearch)
    useEffect(() => {
        setSearchText("");
    }, [])
    function dropdownHandler(e) {
        const [Name, Format] = e.target.accessKey.split('|');
        setInputFormat({ displayName: Name, Format: Format });
        if (Name === "Search By") {
            setInputFormat({ displayName: Name, Format: Format, isDisabled: true });
        }
        if (Name === "Amount") {
            setInputFormat({ displayName: Name, Format: Format, Pattern: "\\d{1,}(\\.\\d{1,})?" });
        }
        document.getElementById("searchitem").value = "";
        setSearchText("")
    }
    function SearchCards() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        {searchitems.map((invoice) =>
                            <div key={invoice._id} className="col-md-3 mb-4">
                                <div id={invoice._id} className="card custom-card">
                                    <div className="card-body">
                                        <h5 className="card-title">{invoice.ClientName}</h5>
                                        <h6 className="card-subtitle mb-3 text-muted">Invoice ID: {invoice.InvoiceID} </h6>
                                        <p className="card-text">Total Amount: {invoice.TotalAmount}</p>
                                        <p className="card-text">Issue Date: {invoice.IssueDate}</p>
                                        <p className="card-text">Due Date: {invoice.DueDate}</p>
                                    </div>
                                    <div className="row row-size text-center mb-3">
                                        <div className="col" />
                                        <Link to={"details/" + invoice._id} className="btn btn-primary col-4">View More</Link>
                                        <div className="col" />
                                        <button onClick={() => { }} className="btn del-btn btn-danger col-4">Delete</button>
                                        <div className="col" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div >
            </>
        )
    }
    function inputTextHandler(e) {
        setSearchText(e.target.value);
        fetch("http://localhost:5000/invoice/search/" + inputFormat.displayName + "/" + e.target.value)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setSearchitems(data)
            })
    }
    return <>
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={() => { setShowSearch(true) }}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/add" onClick={() => { setShowSearch(false) }}>Add Invoice</Link>
                        </li>
                    </ul>
                    {showSearch && < ul>
                        <li class="nav-item dropdown me-4 pt-1">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {inputFormat.displayName}
                            </a>
                            <ul class="dropdown-menu">
                                <li><span class="dropdown-item" onClick={(e) => { dropdownHandler(e) }} accessKey="Search By|search" >None</span ></li>
                                <li><span class="dropdown-item" onClick={(e) => { dropdownHandler(e) }} accessKey="InvoiceID|text" >InvoiceID</span ></li>
                                <li><span class="dropdown-item" onClick={(e) => { dropdownHandler(e) }} accessKey="ClientName|text" >ClientName</span></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><span class="dropdown-item" onClick={(e) => { dropdownHandler(e) }} accessKey="TotalAmount|text" >TotalAmount</span></li>
                                <li><span class="dropdown-item" onClick={(e) => { dropdownHandler(e) }} accessKey="IssueDate|Date" >IssueDate</span></li>
                                <li><span class="dropdown-item" onClick={(e) => { dropdownHandler(e) }} accessKey="DueDate|Date" >DueDate</span></li>
                            </ul>
                        </li>
                    </ul>}
                </div>
                <form className="d-flex" role="search">
                    {showSearch && <input className="form-control me-2" id="searchitem" type={inputFormat.Format} pattern={inputFormat.Pattern} placeholder={inputFormat.displayName} aria-label="Search" onChange={(e) => { inputTextHandler(e) }} disabled={inputFormat.isDisabled} />}
                </form>
            </div>
        </nav>
        {searchText !== "" && <SearchCards />}
        {searchText === "" && <Outlet /> }
    </>;
}