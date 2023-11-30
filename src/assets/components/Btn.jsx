import { Link } from "react-router-dom";
import "./Btn.scss";

const Btn = (props) => {
  return (
    <Link className="btn" to={props.link}>
      {props.title}
    </Link>
  );
};

export default Btn;
