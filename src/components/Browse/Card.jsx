import { useNavigate } from "react-router-dom";

export function Card({ src, title, id, price }) {
  const navigate = useNavigate();
  const redirectToSinglePage = () => {
    navigate(`/game/${id}`);
  };
  return (
    <div className="card" onClick={() => redirectToSinglePage(id)}>
      <div className="poster">
        <img src={src} />
      </div>
      <div className="content">
        <p>{title}</p>
        <p>{price == 0 ? "Free" : <a>&#8377; {price}</a>} </p>
      </div>
    </div>
  );
}
