import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [allArticles, setAllArticles] = useState(articles);
  //   const [sortedArticles,setSortedArticles] = useState()

  const sortByVotes = () => {
    const sorted = allArticles
      .sort((a, b) => {
        return b.upvotes - a.upvotes;
      })
      .map((item) => {
        return item;
      });
    // const newArray = []
    setAllArticles(sorted);
  };

  const sortByDate = () => {
    const sort = allArticles
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .map((item) => {
        return item;
      });

    setAllArticles(sort);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          onClick={sortByVotes}
          data-testid="most-upvoted-link"
          className="small"
        >
          Most Upvoted
        </button>
        <button
          onClick={sortByDate}
          data-testid="most-recent-link"
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={allArticles} />
    </div>
  );
}

export default App;
