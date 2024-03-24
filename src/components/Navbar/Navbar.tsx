import "./navbar.css";

function Navbar() {
  
  return (
    <div className="navbar">
        <img src="../../assets/Logo_CTC_sans_fond.png" alt="Logo CTC" className="logo"/>
        <div className="links">
            <div className="baskerville">Voir les championnats</div>
            <div className="baskerville">Se connecter</div>
            <div className="baskerville">S'inscrire</div>
        </div>
    </div>
  );
}

export default Navbar;