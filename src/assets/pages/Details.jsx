import Navbar from "./../components/Navbar";
import data from "./../data/data.json";
import "./Details.scss";

const Details = () => {
  return (
    <div className="details">
      <header>
        <Navbar />
      </header>
      <main className="main_details">
        <img src={data[0].img_url} alt="" />
        <div className="headline_details">
          <h3>{data[0].title}</h3>
          <p>{data[0].published_date}</p>
        </div>
        <div className="description_details">
          <p>{data[0].description}</p>
          <p>{data[0].author}</p>
        </div>
      </main>
    </div>
  );
};

export default Details;
