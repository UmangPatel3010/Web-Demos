import Logo from './Logo';
import Menu from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import { Outlet } from "react-router-dom";


export default function Layout() {
    return (<div className="container">
        <div className="row">
            <Logo />
            <Menu />
        </div>
        <div className="row">
            <Sidebar />
            <Outlet />
        </div>
        <div className="row">
            <Footer />
        </div>
    </div>)
}