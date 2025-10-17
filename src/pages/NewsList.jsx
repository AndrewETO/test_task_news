import React, { useEffect, useState } from "react";
import { getData } from "../services/dataFetch";
import ArticleCard from "../components/ArticleCard";
import s from "./NewsList.module.css";

const NewsList = function () {
  const [articles, setArticles] = useState([]);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    getData(0, counter).then((res) => {
      setArticles(res);
      console.log(res[2])
    });
  }, [counter]);

  const addArticles = () => {
    console.log(articles[0])
    setCounter(counter + 10);
  };

  return (
    <div className={s.main}>
      <input type="text" placeholder="Search..." />
      <button onClick={addArticles}>Show</button>
      <h1>{counter}</h1>
      {articles.map((article, index) => {
        return <ArticleCard key={index} article={article} no={index}/>;
      })}
    </div>
  );
};

export default NewsList;
