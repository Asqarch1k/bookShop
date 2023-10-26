import { useParams } from "react-router-dom";
import Card from "@/components/card";
import { badgeVariants } from "@/components/ui/badge";
import { useEffect, useState } from "react";

function SingleProduct({ products, isLiked }) {
  const { productID } = useParams();
  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
    const filteredData = products.find((prev) => prev._id === productID);
    setProductInfo(filteredData);
  }, [productID]);
  console.log(productInfo);
  return (
    <div
      className="w-[220px]  border border-gray-500  cursor-pointer p-1 text-center relative"
    >
      <span
        className={`${badgeVariants({
          variant: "destructive",
        })} absolute top-0 left-0 rounded-none`}
      >
        {productInfo?.badgeText}
      </span>
      <span
        // onClick={handleClick}
        className={`${badgeVariants({
          variant: "destructive",
        })} absolute top-0 right-0 rounded-none`}
      >
        {!isLiked ? "❤️" : "🤍"}
      </span>
      <img
        src={productInfo?.imgSrc}
        alt={productInfo?.imgAlt}
        className="w-[150px] mx-auto mt-2 h-[200px] object-contain"
      />
      <h3>{productInfo?.bookName}</h3>
      <span className="my-4 inline-block">by {productInfo?.author}</span>
      <div className="flex justify-between items-center">
        <p>R.S {productInfo?.discountedPrice}</p>
        <del>R.S {productInfo?.originalPrice}</del>
        <span className="text-red-500 text-[12px]">
          ({productInfo?.discountPercent}%)
        </span>
      </div>
      <span>{productInfo?.genre}</span>
    </div>
  );
}

export default SingleProduct;
