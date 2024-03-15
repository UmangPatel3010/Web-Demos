import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SetInvoice() {
    const [invoice, setInvoice] = useState({
        InvoiceID: "",
        ClientName: "",
        TotalAmount: "",
        IssueDate: "",
        DueDate: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== undefined) {
            fetch("http://localhost:5000/invoice/get/" + id, { method: 'GET' })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setInvoice(data)
                })
        }
        else {
            setInvoice({
                InvoiceID: "",
                ClientName: "",
                TotalAmount: "",
                IssueDate: "",
                DueDate: "",
            })
        }
    }, [id]);

    function inputTextHandler(e) {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    }
    function inputDateHandler(e) {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    }
    function validateData() {
        if (invoice.InvoiceID === "" || invoice.ClientName === "" || invoice.TotalAmount === "" || invoice.IssueDate === "" || invoice.DueDate === "") {
            return false;
        }
        else {
            return true;

        }
    }
    function addInvoice() {
        if (validateData()) {
            fetch("http://localhost:5000/invoice/insert", {
                method: "POST",
                body: JSON.stringify(invoice),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(res => res.json())
                .then((data) => {
                    navigate(-1);
                });
        }
    }
    function updateInvoice() {
        if (validateData()) {
            fetch("http://localhost:5000/invoice/update/" + id, {
                method: "PUT",
                body: JSON.stringify(invoice),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(res => res.json())
                .then((data) => {
                    navigate(-2);
                });
        }
    }

    return <>
        <div className="container mt-5">
            <form onSubmit={(e) => { e.preventDefault() }}>
                <div className="mb-3">
                    <label htmlFor="invoiceId" className="form-label">Invoice ID</label>
                    <input type="text" name="InvoiceID" className="form-control" onChange={(e) => { inputTextHandler(e) }} value={invoice.InvoiceID} id="invoiceId" placeholder="Enter Invoice ID" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="clientName" className="form-label">Client Name</label>
                    <input type="text" name="ClientName" className="form-control" onChange={(e) => { inputTextHandler(e) }} value={invoice.ClientName} id="clientName" placeholder="Enter Client Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="totalAmount" className="form-label">Total Amount</label>
                    <input type="text" name="TotalAmount" pattern="\d{1,}(\.\d{1,})?" onChange={(e) => { inputTextHandler(e) }} value={invoice.TotalAmount} className="form-control" id="totalAmount" placeholder="Enter Total Amount" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="issueDate" className="form-label">Issue Date</label>
                    <input type="date" name="IssueDate" onChange={(e) => { inputDateHandler(e) }} value={invoice.IssueDate} className="form-control" id="issueDate" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input type="date" name="DueDate" onChange={(e) => { inputDateHandler(e) }} value={invoice.DueDate} className="form-control" id="dueDate" required />
                </div>
                <div className="row">
                    <div className="col" />
                    <button onClick={() => { navigate("/") }} className="btn col-2 btn-warning">Back</button>
                    <div className="col-1" />
                    {id === undefined && <button type="submit" onClick={() => { addInvoice() }} className="btn col-2 btn-success">Add</button>}
                    {id !== undefined && <button type="submit" onClick={() => { updateInvoice() }} className="btn col-2 btn-success">Update</button>}
                    <div className="col" />
                </div>
            </form>
        </div>
    </>;
}