import React, { useEffect, useState } from 'react';
import News from './News';

const Newsboard = () => {
  const [search, setSearch] = useState('us');
  const [newsData, setNewsData] = useState([]); 
  
  const KEY_API = '48352553a7b2465d8d1e115cf54e8d9e';

  const getdata = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${KEY_API}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles); 
      console.log(jsonData.articles); 
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };



  const change = (e) => {
    setSearch(e.target.value); 
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5 mb-4">
              Latest <span className="badge text-bg-info">News</span>
            </h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={change}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={getdata}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          {newsData.length > 0 ? (
            newsData.map((article, index) => (
              <News
                key={index}
                title={article.title}
                desc={article.description}
                img={article.urlToImage}
                author={article.author}
              />
            ))
          ) : (
            <p className="text-center">No news to display. Please search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsboard;
