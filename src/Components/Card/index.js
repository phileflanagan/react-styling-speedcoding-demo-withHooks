import React from "react";

import {
  CardWrapper,
  ImageWrapper,
  CardImage,
  CardBottom,
  CardDescription,
  CardConversion,
  CardInfo,
  CardTitle,
  CardPrice,
  CardCTA,
  SoldOut
} from "./styles";

const Card = ({ card, index, handlePurchase }) => (
  <CardWrapper>
    {card.soldOut && <SoldOut>Sold Out</SoldOut>}
    <ImageWrapper r169>
      <CardImage bg={card.image} />
    </ImageWrapper>
    <CardBottom>
      <CardInfo>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardInfo>
      <CardConversion>
        <CardPrice>{card.price}</CardPrice>
        <CardCTA onClick={() => handlePurchase(index)}>{card.ctaText}</CardCTA>
      </CardConversion>
    </CardBottom>
  </CardWrapper>
);
export default Card;
