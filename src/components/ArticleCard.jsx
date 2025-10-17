import React from "react";
import noImageIcon from "../assets/no_image.jpeg"
import s from "./ArticleCard.module.css";

const ArticleCard = function ({ article, no }) {

  return (
    <div className={s.main}>
      <section className={s.image}>
        <img
          src={!article.urlToImage ? noImageIcon : article.urlToImage}
          alt="no image for this article"
          onError={(e) => e.target.src=noImageIcon}
        />
      </section>

      <section className={s.details}>
        <h4>{article.title}</h4>
        <p>{article.description}</p>
        <span>Read more...</span>
      </section>
    </div>
  );
};

export default ArticleCard;
