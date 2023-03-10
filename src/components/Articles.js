import React, { useMemo } from "react";

function Articles({ articles }) {
  const renderArticles = useMemo(() => {
    return articles.map(({ title, upvotes, date }) => {
      return (
        <tr data-testid="article" key="article-index">
          <td data-testid="article-title">{title}</td>
          <td data-testid="article-upvotes">{upvotes}</td>
          <td data-testid="article-date">{date}</td>
        </tr>
      );
    });
  }, [articles]);

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderArticles}</tbody>
      </table>
    </div>
  );
}

export default Articles;
