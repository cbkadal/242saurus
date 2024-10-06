import React, { useState } from "react";
import "./QuickAccess.css";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const cards = [
    {
      title: "Tutorial",
      subtitle: "Introduction",
      image: "img/cbkadalDOCU.jpg",
      content: "Yada yada yada yada yada.",
      target: "docs/intro/"
    },
    {
      title: "Tutorial",
      subtitle: "Introduction",
      image: "img/cbkadalDOCU.jpg",
      content: "Yada yada yada yada yada.",
      target: "docs/intro/"
    },
    {
      title: "Tutorial",
      subtitle: "Introduction",
      image: "img/cbkadalDOCU.jpg",
      content: "Yada yada yada yada yada.",
      target: "docs/intro/"
    },
    {
      title: "Tutorial",
      subtitle: "Introduction",
      image: "img/cbkadalDOCU.jpg",
      content: "Yada yada yada yada yada.",
      target: "docs/intro/"
    },
    {
      title: "Tutorial",
      subtitle: "Introduction",
      image: "img/cbkadalDOCU.jpg",
      content: "Yada yada yada yada yada.",
      target: "docs/intro/"
    },
  ];

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

  return (
    <>
      <div className="title">Quick Access</div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
      </div>
      <div className="grid-container">
        {filteredCards.map((card, index) => (
          <a href={card.target} className="" key={card.title}>
            <article className="card" key={index}>
              <img src={card.image} alt="Place image here" />
              <div className="card_content">
                <span className="card_title">{card.title}</span>
                <span className="card_subtitle">{card.subtitle}</span>
                <p className="card_description">
                  {card.content.length > 200
                    ? `${card.content.substring(0, 200)}...`
                    : card.content}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
};

export default Index;

// REV01: Thu 28 Mar 2024 00:00
// START: Wed 14 Jun 2023 15:00

