import React from 'react';
import s from "./Main.module.css";
import NewsList from "../pages/NewsList";

const Main = function() {

  return(
    <div className={s.main}>
      <NewsList />
    </div>
  )
}

export default Main;