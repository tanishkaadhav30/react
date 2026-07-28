import "../components/BookCard/BookCard.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <h1>📞 Contact Us</h1>
        <p>
          Have questions about the languages, recommendations, or the site content?
          Send us a message and our support team will reply shortly.
        </p>
      </section>

      <section className="contact-card-grid">
        <article className="contact-card">
          <h2>Support</h2>
          <p>
            <strong>Email:</strong> support@langlibrary.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Hours:</strong> Monday to Friday, 9am–6pm
          </p>
        </article>

        <article className="contact-card">
          <h2>Languages Covered</h2>
          <p>C</p>
          <p>C++</p>
          <p>Java</p>
          <p>Python</p>
          <p>JavaScript</p>
          <p>ReactJS</p>
        </article>

        <article className="contact-card">
          <h2>Help Topics</h2>
          <p>Language comparisons</p>
          <p>Performance questions</p>
          <p>Best use cases</p>
          <p>Learning resources</p>
        </article>
      </section>
    </main>
  );
}

export default Contact;

