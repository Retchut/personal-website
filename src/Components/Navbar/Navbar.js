import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg my-4 background-box rounded">
            <div className="mx-4 container-fluid link-button">
                <Link to="/" className="navbar-brand">Home</Link>

                <ul className="navbar-nav">
                    <li className="nav-item mx-2">
                        <Link to="/about" className="nav-link">About Me</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    {/* <li className="menu-item link-button"> */}
                        {/* <a href="../epochalypse/epochalypse.html">Epochalypse Countdown</a> */}
                    {/* </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;