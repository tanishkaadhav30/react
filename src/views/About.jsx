import BookCard from "../components/BookCard/BookCard";
import languages from "../../data.json";

function About() {
  return (
    <main className="home-page">
      <section className="home-page__header">
        <h1>About the Languages</h1>
        <p>Learn the origin, strengths, and trade-offs of each language in the collection.</p>
      </section>

      <section className="home-page__grid">
        {languages.map((language) => (
          <BookCard key={language.name} language={language} />
        ))}
      </section>
    </main>
  );
}

export default About;