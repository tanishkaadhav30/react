import BookCard from "../components/BookCard/BookCard";
import languages from "../../data.json";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page__header">
        <h1>Programming Languages</h1>
        <p>Explore the strengths and trade-offs of popular languages.</p>
      </div>

      <div className="home-page__grid">
        {languages.map((language) => (
          <BookCard key={language.name} language={language} />
        ))}
      </div>
    </div>
  );
}

export default Home;