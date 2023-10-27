import PropTypes from "prop-types";
import { badgeVariants } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { Fragment } from "react";

function Card({
  bookName,
  originalPrice,
  author,
  rating,
  discountedPrice,
  imgSrc,
  imgAlt,
  badgeText,
  discountPercent,
  _id,
  genre,
  handleLikeBtnClick,
  isLiked,
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    handleLikeBtnClick(_id);
  };
  return (
    <div
      className="w-[220px]  border border-gray-500  cursor-pointer  text-center relative box-shadow: 0 0 25px 6px rgb(172, 172, 172);"
      onClick={() => navigate("/product/" + _id)}
    >
      <span
        className={`${badgeVariants({
          variant: "destructive",
        })} absolute top-0 left-0 rounded-none`}
      >
        {badgeText}
      </span>
      <span
        onClick={handleClick}
        className={`${badgeVariants({
          variant: "destructive",
        })} absolute top-0 right-0 rounded-none bg-transparent hover:bg-transparent`}
      >
        {!isLiked ? (
          <i className="fa-solid fa-heart text-red-600 text-xl"></i>
        ) : (
          <i className="fa-regular fa-heart text-gray-500 text-xl"></i>
        )}
      </span>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-[150px] mx-auto mt-2 h-[200px] object-contain"
      />
      <h3>{bookName}</h3>

      <span className="my-4 inline-block">by {author}</span>

      <div className="flex justify-between items-center">
        <p>R.S {discountedPrice}</p>
        <del>R.S {originalPrice}</del>
        <span className="text-red-500 text-[12px]">({discountPercent}%)</span>
      </div>

      <div className="flex items-center gap-2 justify-center">
        <h3>Rating:</h3>
        <div className="flex items-center ">
          {Array.from({ length: rating }, (_, index) => {
            return (
              <Fragment key={index}>
                <span className="text-yellow-400">
                  <AiTwotoneStar />
                </span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Card;

Card.propTypes = {
  bookName: PropTypes.string,
  originalPrice: PropTypes.number,
  author: PropTypes.string,
  discountedPrice: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  badgeText: PropTypes.string,
  discountPercent: PropTypes.number,
  _id: PropTypes.string,
  genre: PropTypes.string,
  isLiked: PropTypes.any,
  handleLikeBtnClick: PropTypes.func,
  rating: PropTypes.number,
};
