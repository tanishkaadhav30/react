import './BookCard.css';

function BookCard({ language }) {
  const { name, create, image, advantage, disadvantage } = language || {};

  return (
    <article className="book-card">
      <div className="book-card__image-wrap">
        <img className="book-card__image" src={image} alt={name} />
      </div>

      <div className="book-card__content">
        <span className="book-card__badge">Programming Language</span>
        <h3 className="book-card__title">{name}</h3>
        <p className="book-card__meta">
          <strong>Created:</strong> {create}
        </p>

        <div className="book-card__section">
          <h4>Advantage</h4>
          <p>{advantage}</p>
        </div>

        <div className="book-card__section">
          <h4>Disadvantage</h4>
          <p>{disadvantage}</p>
        </div>
      </div>
    </article>
  );
}

export default BookCard;