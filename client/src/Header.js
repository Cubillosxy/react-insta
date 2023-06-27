import { Link } from "react-router-dom";

export default function Header(props) {
    
        return (
            <header>
                <Link to="/" className='logo'>Local News</Link>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/singup">Register</Link>
                </nav>
    
            </header>
        );
    
}