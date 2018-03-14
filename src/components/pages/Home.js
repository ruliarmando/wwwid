import React from 'react';
import { Link } from 'react-router-dom';

const slugify = title => {
  return title.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

const getId = guid => guid.split('/')[4]

const Home = ({ feeds }) => (
  <div>
    {
      feeds.map(item => (
        <div key={item.guid}>
          <Link className="no-underline" to={`/article/${slugify(item.title)}-${getId(item.guid)}`}>
            <h3 className="ph1">{item.title}</h3>
            <img className="w-100" src={item.thumbnail} alt="image-thumbnail" />
            <div
              className="ph2 tj"
              dangerouslySetInnerHTML={{ __html: item.description.match(/<p>(.*?)<\/p>/)[0] }}
            />
          </Link>
        </div>
      ))
    }
  </div>
);

export default Home;