import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import NewsCard from "./NewsCard";
import "./NewsCard.css";

function LandingPage() {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetching categories
    axios
      .get("https://app.findmementor.com/fmmnimda/webservices/category.php")
      .then((response) => {
        console.log(response.data.response.data.category);
        setCategories(response.data.response.data.category);
      });

    // logic not clear but it works --fetching news based on URL parameter
    const categoryId = new URLSearchParams(location.search).get("categoryId");
    if (categoryId) {
      axios
        .get(
          `https://app.findmementor.com/fmmnimda/webservices/category-wise-news.php?id=${categoryId}&page=1&pp=20`
        )
        .then((response) => {
          console.log(response.data.response.data.news);
          setNews(response.data.response.data.news);
        });
    } else {
      // default 20 news items fetching default news
      axios
        .get("https://app.findmementor.com/fmmnimda/webservices/news.php?page=1&pp=20")
        .then((response) => {
          console.log(response.data.response.data.news);
          setNews(response.data.response.data.news);
        });
    }
  }, [location]);

  return (
    <div >
      <header className="head">
        <h1>Today's Point</h1>
        <nav className="top-right-nav">
          <ul>
            
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/personalize">Personalize</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="side-nav">
        <nav className="top-nav">
        <ul>
        <li>
          <Link to="/" 
          className={
                  new URLSearchParams(location.search).get("categoryId") === null ? "active" : ""
                  }>Home</Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/?categoryId=${category.id}`} className={
                    new URLSearchParams(location.search).get("categoryId") ===
                    category.id.toString()
                      ? "active"
                      : ""
                  }>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
        </nav>
      </div>

      <main className="main">
        <div className="cards-container">
          {news.map((newsItem) => (
            <NewsCard
              key={newsItem.id}
              short_desc={newsItem.short_desc}
              long_desc={newsItem.long_desc}
            />
          ))}
        </div>
      </main>

      <footer className="footer">&copy; 2023</footer>
    </div>
  );
}

export default LandingPage;
