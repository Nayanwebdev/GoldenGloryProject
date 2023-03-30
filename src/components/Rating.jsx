import { useState } from "react";


function RatingBlock() {
  const [rating, setRating] = useState(4);

  const handleRatingClick = (event) => {
    const selectedRating = parseInt(event.target.dataset.rating);
    setRating(selectedRating);
  };

  const renderRatingIcons = () => {
    const maxRating = 5;
    const ratingIcons = [];

    for (let i = 1; i <= maxRating; i++) {
      const filled = i <= rating;
      const starClassName = filled ? "fa fa-star rate" : "fa fa-star blank-rate";
      ratingIcons.push(<i key={i} className={starClassName} data-rating={i} onClick={handleRatingClick} />);
    }

    return ratingIcons;
  };

  return (
    <div>
      <div className="rating-icons">{renderRatingIcons()}</div>
    </div>
  );
}

export default RatingBlock;
