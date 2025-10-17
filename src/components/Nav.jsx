import React from "react";
import { getData } from "../services/dataFetch";
import s from "./Nav.module.css";

const Nav = function () {
  const getArticles = async () => {
    const articles = await getData();
    console.log(articles);
  };

  return (
    <div className={s.main}>
      <button onClick={getArticles}>Get topics</button>
      <button onClick={getArticles}>Get topics</button>
      <button onClick={getArticles}>Get topics</button>
    </div>
  );
};

export default Nav;
