import Btn from "./Btn";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card__wrapper">
      <img src={props.img} alt="" />
      <h3 className="card_title">{props.title}</h3>
      <Btn title={"Read More"} link={"/details"} />
    </div>
  );
};

export default Card;
