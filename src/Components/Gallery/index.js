import React, { useState, useEffect } from "react";

import { GalleryWrapper, GalleryItem } from "./styles";

import Card from "../Card";

const INITIAL_STATE = Array(9).fill({
  image: "https://404store.com/2017/08/15/4949794-random-image.jpg",
  title: "Info",
  description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Quibusdam facilis neque aperiam corrupti sint ducimus nam
  blanditiis, in quos recusandae!`,
  price: "$0.00",
  ctaText: "Buy Now",
  soldOut: false
});

const Gallery = () => {
  const [cards, setCards] = useState(INITIAL_STATE);

  const handlePurchase = index => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], soldOut: true };
    setCards(newCards);
  };

  return (
    <GalleryWrapper>
      {cards.map((card, i) => (
        <GalleryItem key={i}>
          <Card card={card} index={i} handlePurchase={handlePurchase} />
        </GalleryItem>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
