import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
import Rank from "./common/Rank";
import { Route, Routes, Link } from "react-router-dom";
import list from "./productData";
import { useEffect, useState } from "react";
import Add2Component from "./App copy";

import axios from "axios";
import Detail from "./pages/Detail";

const clientId = "P7oEzPyeF_yhAl_mExSg";
const clientSecret = "96KxabpC8F";

function App() {
  let [movieList, setMovieList] = useState([]);
  let [jsonData, setjsonData] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route path="/shop" element={<Shop list={list} />} />
        <Route path="/blog" element={<Blog movieList={movieList} />} />
        <Route path="/story" element={<Story />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/detail/:id" element={<Detail list={list} />} />
        <Route path="/app2" element={<Add2Component />} />
        <Route path="*" element={<>이런 페이지는 없음</>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
