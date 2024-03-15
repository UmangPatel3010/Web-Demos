function Sidebar() {
    return (<div className="border border-info col-2 bg-black">
        <nav id="sidebar" class="col d-md-block mt-2 sidebar">
            <div class="position-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Orders
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Customers
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>)
}

export default Sidebar;
