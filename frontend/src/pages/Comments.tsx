import React, { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import "../static/styles/pages/burgerComments.css";

interface commentParams {
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
  latitude?: number;
  longitude?: number;
}

const Comments: React.FC = () => {
  const { id } = useParams<commentParams>();
  const [restaurantData, setRestaurantData] = useState<[RestaurantData, Comments[]]>([
    {
      name: "",
      address: "",
      opening_hours: "",
      menu: "",
    },
    [],
  ]);

  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetch(`https://hamburgy-rest.herokuapp.com/burguer-places/${id}`)
      .then(x => x.json())
      .then(res => setRestaurantData(res));
  }, [id]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`https://hamburgy-rest.herokuapp.com/create-comment/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        author: author,
        rating: rating,
        comment: comment,
      }),
    });
    window.location.reload();
  };

  return (
    <div className="comment-page">
      <Header name={restaurantData[0].name} />
      <div className="comment-content">
        <h1 id="comment-title">Comentários</h1>
        <div className="main-comments">
          {restaurantData[1].length > 0 ? (
            restaurantData[1].map(comment => {
              return (
                <div key={comment.comment_id} className="single-comment">
                  <h1 className="author">{comment.author}</h1>
                  <p className="comment">{comment.comment}</p>
                  <p className="rating">{comment.rating}/5</p>
                </div>
              );
            })
          ) : (
            <h1 id="not-found">Nenhum comentário foi encontrado...</h1>
          )}
        </div>
        <div className="add-comment">
          <h1 id="comment-message">Comente a sua experiência: </h1>
          <form onSubmit={handleSubmit}>
            <div className="name-and-rating">
              <div className="name">
                <label className="name-label">Nome completo</label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                  placeholder="Seu nome"
                />
              </div>
              <div className="rating-block">
                <label className="rating-label">Avaliação: </label>
                <input
                  type="number"
                  name="rating"
                  max="5"
                  min="0"
                  value={rating}
                  onChange={e => setRating(e.target.valueAsNumber)}
                />
              </div>
            </div>
            <label className="comment-section">Comentários:</label>
            <textarea
              name="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
              maxLength={250}
            />
            <br />
            <button type="submit" className="btn-submit">
              Comentar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
