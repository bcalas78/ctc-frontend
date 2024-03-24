import "./card.css";
import { Link } from "react-router-dom";

interface CardProps {
    backgroundImage: string;
    title: string;
    linkUrl: string;
}

const Card: React.FC<CardProps> = ({ backgroundImage, title, linkUrl }) => {
  
  return (
    <div className="card-category" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="card-overlay">
            <div className="card-title">
                <nav>
                    <Link to={linkUrl}>{title}</Link>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default Card;