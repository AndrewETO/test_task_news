import React from 'react';
import s from "./Main.module.css";
import NewsList from "../pages/NewsList";
import Nav from "./Nav";

const Main = function() {

  return(
    <div className={s.main}>
      <Nav />
      <NewsList />
    </div>
  )
}

export default Main;