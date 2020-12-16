import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaComments,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "../static/styles/pages/burgerDetails.css";

interface RestaurantParams {
  id: string;
}

interface Comments {
  comment_id: string;
  restaurant_id: number;
  author: string;
  rating: number;
  comment: string;
}

interface RestaurantData {
  id?: string;
  name: string;
  address: string;
  opening_hours: string;
  menu: string;
  latitude: number;
  longitude: number;
}

interface stars {
  full: JSX.Element[];
  half: JSX.Element[];
  empty: JSX.Element[];
}

const BurguerDetails: React.FC = () => {
  const { id } = useParams<RestaurantParams>();
  const [rating, setRating] = useState<number>(0);
  const [restaurantData, setRestaurantData] = useState<[RestaurantData, Comments[]]>([
    {
      name: "",
      address: "",
      opening_hours: "",
      menu: "",
      latitude: 0,
      longitude: 0,
    },
    [],
  ]);
  const [stars, setStars] = useState<stars>({
    full: [],
    half: [],
    empty: [],
  });

  useEffect(() => {
    fetch(`https://hamburgy-rest.herokuapp.com/burguer-places/${id}`)
      .then(x => x.json())
      .then(res => setRestaurantData(res));
  }, [id]);

  useEffect(() => {
    if (!rating) {
      return;
    }
    const maxStars = 5;
    const totalReviews = restaurantData[1].length;
    const fullStars = Math.floor(rating / totalReviews);
    const HalfStar =
      Math.round(rating / totalReviews) - rating / totalReviews >= 0.5 ? 1 : 0;
    const emptyStars = maxStars - (fullStars + HalfStar);

    const fullArr = [...Array(fullStars)].map((e, i) => <FaStar key={i} />);
    const halfArr = [...Array(HalfStar)].map((e, i) => <FaStarHalfAlt key={i} />);
    const emptyArr = [...Array(emptyStars)].map((e, i) => <FaRegStar key={i} />);

    setStars({
      full: fullArr,
      half: halfArr,
      empty: emptyArr,
    });
  }, [rating, restaurantData]);

  useEffect(() => {
    if (restaurantData[1].length > 0) {
      restaurantData[1].forEach(comment => {
        setRating(prev => prev + comment.rating);
      });
    }
  }, [restaurantData]);

  if (restaurantData[0].name.length <= 0) {
    return null;
  }

  return (
    <div className="detail-page">
      <Header name={restaurantData[0].name} />
      <div className="detail-content">
        <div className="detail-text">
          <p>
            <span>Endereço:</span>
            {restaurantData[0].address}
            <a
              style={{
                color: "var(--main-color)",
                fontWeight: 500,
                textDecoration: "none",
                marginLeft: ".4rem",
              }}
              href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantData[0].latitude},${restaurantData[0].longitude}`}
              target="_blank"
              rel="noopener noreferrer">
              <FaMapMarkedAlt />
            </a>
          </p>
          <p>
            <span>Avaliação: </span>
            {(stars.full.length > 0 || stars.half.length > 0) && (
              <span className="rating">
                {stars.full}
                {stars.half}
                {stars.empty}
              </span>
            )}
            <span className="total-reviews">
              <Link to={`/burger-details/comments/${id}`}>
                {restaurantData[1].length === 0
                  ? `Nenhuma avaliação foi realizada.`
                  : `(${restaurantData[1].length} avaliações)`}
              </Link>
            </span>
          </p>
          <p>
            <span>Aberto entre:</span> {restaurantData[0].opening_hours}
          </p>
        </div>
        <div className="detail-buttons">
          <button className="menu">
            <a href={restaurantData[0].menu} target="_blank" rel="noopener noreferrer">
              Cardápio
            </a>
          </button>
          <button className="comments">
            <Link to={`/burger-details/comments/${id}`}>
              Comentários
              <FaComments size={64} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurguerDetails;
