function College(props) {
    return (
        <div>
            {props.city == "Rajkot" && <h1>{props.name} from - {props.city}</h1>}
            {props.city != "Rajkot" && <h2>{props.name} from - {props.city}</h2>}
        </div>
    )
}
function Main() {
    return (<div className="border bg-warning-subtle border-info col">
        <div class="container mt-5 ">
            <h1>Hello, Bootstrap!</h1>
            <p>This is a simple demo using Bootstrap.</p>

            <div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!
            </div>

            <button type="button" class="btn btn-success">Success Button</button>

            <div class="card mt-3 bg-primary-subtle">
                <div class="card-body">
                    <h5 class="card-title">Card Title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <College name="Darshan University" city="Rajkot" />
        <College name="Darshan University" city="Anand" />
    </div>)
}

export default Main;
