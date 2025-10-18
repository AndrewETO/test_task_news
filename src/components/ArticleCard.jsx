import React, { useState } from "react";
import noImageIcon from "../assets/no_image.jpeg";
import { dateParcer } from "../utils/dateParcer";
import s from "./ArticleCard.module.css";

const ArticleCard = function ({ article, no }) {
  const { localTimeFull } = dateParcer(article.publishedAt);
  const [details, setDetails] = useState(false);

  const showDetails = (e) => {
    const articleCard = e.target.closest(`.${s.main}`);
    setDetails(!details);
    console.log(article);
    !details
      ? articleCard.classList.add(s.showDetails)
      : articleCard.classList.remove(s.showDetails);
  };

  return (
    <div className={s.main}>
      {details ? (
        <section className={s.full}>
          <img
            src={!article.urlToImage ? noImageIcon : article.urlToImage}
            alt="no image for this article"
            onError={(e) => (e.target.src = noImageIcon)}
          />
          <h2>{article.title}</h2>
          <div>{article.description}</div>
          <div className={s.info}>
            <p>Author: {article.author}</p>
            <p>
              Source:{" "}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.source.name}
              </a>
            </p>
            <p className={s.time}>{localTimeFull}</p>
          </div>
          <span onClick={showDetails}>
            {!details ? "Read more..." : "Less"}
          </span>
        </section>
      ) : (
        <>
          <section className={s.image}>
            <img
              src={!article.urlToImage ? noImageIcon : article.urlToImage}
              alt="no image for this article"
              onError={(e) => (e.target.src = noImageIcon)}
            />
          </section>

          <section className={s.details}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <span onClick={showDetails}>
              {!details ? "Read more..." : "Less"}
            </span>
          </section>
        </>
      )}
    </div>
  );
};

export default ArticleCard;
