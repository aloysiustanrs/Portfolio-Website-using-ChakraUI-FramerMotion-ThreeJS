import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ links }) => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [];

  for (let i = 0; i < links.length; i++) {
    items.push(
      <img
        src={`${links[i]}`}
        onDragStart={handleDragStart}
        role="presentation"
      />
    );
  }

  return (
    <AliceCarousel
      mouseTracking
      autoPlay
      autoPlayInterval={1000}
      items={items}
    />
  );
};

export default Carousel;
