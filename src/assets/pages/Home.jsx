import Btn from "../components/Btn";
import Navbar from "./../components/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="opener">
        <h1>Welcome to my simple Blog</h1>
        <Btn title={"Go to articles"} link={"/blog"} />
      </div>
    </>
  );
};

export default Home;
