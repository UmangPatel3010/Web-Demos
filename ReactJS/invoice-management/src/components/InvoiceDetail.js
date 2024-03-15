import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../Styles/InvoiceDetails.css"

export default function InvoiceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/invoice/get/" + id)
            .then(res => res.json())
            .then((data) => {
                setInvoice(data)
            })
    }, [])

    return (<>
        <div className="container mt-4">
            <div className="row">
                <div className='col' />
                <div className="col-md-3 mb-4">
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
                            <button onClick={() => { navigate(-1) }} className="btn del-btn btn-warning col-4">Back</button>
                            <div className="col" />
                            <Link to={"/update/" + invoice._id} className="btn btn-primary col-4">Edit</Link>
                            <div className="col" />
                        </div>
                    </div>
                </div>
                <div className='col' />
            </div>
        </div >
    </>
    );
}