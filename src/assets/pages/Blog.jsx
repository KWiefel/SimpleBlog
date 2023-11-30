import data from "./../data/data.json";
import Card from "../components/Card";
import Navbar from "./../components/Navbar";
import "./Blog.scss";

const Blog = () => {
  return (
    <div className="blog">
      <header>
        <Navbar />
      </header>
      <main className="main_blog">
        {data.map((article, index) => {
          return (
            <Card key={index} img={article.img_url} title={article.title} />
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
