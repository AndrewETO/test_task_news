import React, { useEffect, useState } from "react";
import { getData } from "../services/dataFetch";
import ArticleCard from "../components/ArticleCard";
import s from "./NewsList.module.css";

const NewsList = function () {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(10);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getData(0, counter, search, category).then((res) => {
      setArticles(res);
    });
    const buttons = document.getElementsByClassName("buttons");
    Array.from(buttons).forEach((el) => {
      if (el.name == category) {
        el.style.borderBottom = "2px solid #FF7B10";
      } else el.style.borderBottom = "2px solid #322D29";
    });
  }, [counter, search, category]);

  const addArticles = () => {
    setCounter(counter + 10);
  };

  return (
    <div className={s.main}>
      <h1 style={{ color: "#FF7B10", fontSize: "40px" }}>World's news</h1>
      <div className={s.category}>
        <button onClick={() => setCategory("")} name="" className="buttons">
          All categories
        </button>
        <button
          onClick={() => setCategory("sport")}
          name="sport"
          className="buttons"
        >
          Sport
        </button>
        <button
          onClick={() => setCategory("technology")}
          name="technology"
          className="buttons"
        >
          Technology
        </button>
        <button
          onClick={() => setCategory("politic")}
          name="politic"
          className="buttons"
        >
          Politic
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCounter(10);
        }}
      />
      {articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />;
      })}
      <button onClick={addArticles}>Show more...</button>
    </div>
  );
};

export default NewsList;
