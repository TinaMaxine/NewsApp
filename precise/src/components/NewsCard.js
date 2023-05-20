import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({ short_desc, long_desc }) {
  const [expanded, setExpanded] = useState(false);

  const handleShowMore = () => {
    setExpanded(true);
  };

  const handleShowLess = () => {
    setExpanded(false);
  };

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        {/* <img className="news-card__image" src={newsItem.media} alt="news" /> */}
      </div>
      <div className="news-card__content">
        <h2 className="news-card__title">{short_desc}</h2>
        <div className="news-card__desc-wrapper">
          <p
            className={`news-card__description${
              expanded ? " news-card__expanded" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: long_desc }}
          ></p>
          {!expanded ? (
            <span className="news-card__show-more" onClick={handleShowMore}>
              ...see more
            </span>
          ) : (
            <span className="news-card__show-more" onClick={handleShowLess}>
              ...see less
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
