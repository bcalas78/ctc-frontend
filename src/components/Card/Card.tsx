import "./card.css";

interface CardProps {
    backgroundImage: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ backgroundImage, title }) => {
  
  return (
    <div className="card-category" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="card-overlay">
            <div className="card-title">{title}</div>
        </div>
    </div>
  );
}

export default Card;