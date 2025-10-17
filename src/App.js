import Header from "./components/Header";
import s from './App.module.css'
import Main from "./components/Main";

function App() {
  return (
    <div className={s.main}>
      <Header />
      <Main />
    </div>
  )
}
export default App;
