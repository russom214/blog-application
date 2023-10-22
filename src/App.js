import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
