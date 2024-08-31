import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageSlider.css"; // Import custom styles for hiding navigation buttons

const carouselItems = [
  {
    src: "https://pbs.twimg.com/media/GAyeMZ9bcAASAyY?format=jpg&name=4096x4096",
    alt: "First slide",
  },
  {
    src: "https://i.pinimg.com/originals/16/f9/a5/16f9a57eb5e7bed5a1ea8c82c7884092.jpg",
    alt: "Second slide",
  },
  {
    src: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
    alt: "Third slide",
  },
];

const ImageSlider = () => {
  return (
    <div className="relative">
      <Carousel interval={3000} indicators={false} controls={true}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-full max-h-[400px] object-cover"
              src={item.src}
              alt={item.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
