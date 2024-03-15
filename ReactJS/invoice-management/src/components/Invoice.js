import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/InvoiceService.css"

export default function InvoiceService() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/invoice/get",)
            .then(res => res.json())
            .then((data) => { setInvoices(data) })
    }, []);

    function deleteInvoice(id) {
        document.getElementById(id).className += " card-ani"
        setTimeout(() => {
            fetch("http://localhost:5000/invoice/delete/" + id, {
                method: "DELETE",
            }).then(res => res.json())
                .then((data) => {
                    setInvoices(invoices.filter(invoice => invoice._id !== id));
                    document.getElementById(id).className = "card custom-card"
                })
        }, 100)

    }

    return (
        <div className="container mt-4">
            <div className="row">
                {invoices.map((invoice) =>
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
                                <button onClick={() => { deleteInvoice(invoice._id) }} className="btn del-btn btn-danger col-4">Delete</button>
                                <div className="col" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}