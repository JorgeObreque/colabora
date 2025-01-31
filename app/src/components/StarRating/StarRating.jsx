import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ value, count = 7, type }) => {
  const starColors = [
    "#F30400", // Rojo
    "#F35B00", // Naranja
    "#FFC200", // Amarillo
    "#F8DE00", // Amarillo claro
    "#B0DB00", // Verde claro
    "#6CC000", // Verde medio
    "#228B22", // Verde oscuro
  ];

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap"
      style={{
        gap: "5px", // Espaciado entre las estrellas
        padding: type === 'company' ? '5px' : "20px",
      }}
    >
      {[...Array(count)].map((_, index) => {
        const isFilled = value >= index + 1; // Estrella completamente llena
        const isHalf = value > index && value < index + 1; // Media estrella

        return (
          <span
            key={index}
            style={{
              color: isFilled || isHalf ? starColors[index] : "gray",
              fontSize: type === "company" ? "2rem" : "clamp(2rem, 5vw, 3rem)", // Escala con la pantalla (2rem a 3rem)
              margin: "1px",
            }}
          >
            {isFilled ? (
              <FaStar />
            ) : isHalf ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
