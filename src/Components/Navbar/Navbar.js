import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="mx-4 container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <ul class="navbar-nav">
                    <li class="nav-item mx-2">
                        <Link to="/about" className="nav-link">About Me</Link>
                    </li>
                    <li class="nav-item mx-2">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    {/* <li class="menu-item link-button"> */}
                        {/* <a href="../epochalypse/epochalypse.html">Epochalypse Countdown</a> */}
                    {/* </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;