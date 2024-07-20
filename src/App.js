import React from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './component/Card';

import { useState } from 'react';

import './index.css';

//-------------------database
import products from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //------------------input filter
  const handleputChange = e => {
    setQuery(e.target.value);
  }

  //만약 소문자로 변환한 query 문자열이 제목에 포함되어 있다면, indexOf()는 해당 인덱스를 반환하고, 그렇지 않으면 -1을 반환.
  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //-----------------radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }
  //-----------------button filter
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }
  function filteredData(products, selected, query) {
    let filteredProducts = products

    //----------------filtering input items
    if (query) {
      filteredProducts = filteredItems
    }

    //----------------selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) =>
    (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleputChange={handleputChange} />
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>

    </>
  )
}

export default App
