import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <div className="navbar">
        <Link to="/">
            <img src="../../assets/Logo_CTC_sans_fond.png" alt="Logo CTC" className="logo"/>
        </Link>
        <div className="links">
            <div className="menuItem">
                <nav>
                    <Link to="/championnats">Voir les championnats</Link>
                </nav>
            </div>
            <div className="menuItem">
                <nav>
                    <Link to="/connexion">Se connecter</Link>
                </nav>
            </div>
            <div className="menuItem">
                <nav>
                    <Link to="/inscription">S'inscrire</Link>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default Navbar;