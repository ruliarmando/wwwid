import React from 'react';

const Article = ({ feeds, match }) => {
  const slugSplitted = match.params.slug.split('-');
  const id = slugSplitted[slugSplitted.length-1];
  const article = feeds.find(item => {
    return item.guid.split('/')[4] === id;
  });

  return (
    <div className="w-100">
      <h3 className="ph1">{article.title}</h3>
      <div
        className="ph2 tj"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default Article;