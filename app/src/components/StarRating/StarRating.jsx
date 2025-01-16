import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Importa los íconos necesarios

const StarRating = ({ value, count = 7 }) => {
  const starColors = [
    "#F30400", // Rojo intenso
    "#F35B00", // Naranja
    "#FFC200", // Amarillo
    "#F8DE00", // Amarillo claro
    "#B0DB00", // Verde claro
    "#6CC000", // Verde medio
    "#228B22", // Verde oscuro
  ];

  return (
    <div className="star-rating d-flex justify-content-center align-items-center">
      {[...Array(count)].map((_, index) => {
        const isFilled = value >= index + 1; // Estrella completamente llena
        const isHalf = value > index && value < index + 1; // Media estrella

        return (
          <span
            key={index}
            style={{
              color: isFilled || isHalf ? starColors[index] : "gray", // Color dinámico o gris para vacías
              fontSize: "50px",
              marginRight: "5px",
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