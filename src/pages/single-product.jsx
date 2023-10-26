import { useParams } from "react-router-dom";
import { badgeVariants } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Fragment } from "react";
import { Button } from "@/components/ui/button"; 

function SingleProduct({ products, isLiked, rating }) {
  const { productID } = useParams();
  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
    const filteredData = products.find((prev) => prev._id === productID);
    setProductInfo(filteredData);
  }, [productID]);

  return (
    <>
      <div className="flex mt-10 gap-10">
        <div>
          {" "}
          <img
            src={productInfo?.imgSrc}
            alt={productInfo?.imgAlt}
            className="w-[300px] mx-auto mt-2 h-[400px] object-contain"
          />
        </div>
        <div className="flex flex-col pt-8 gap-5">
          <h3 className="text-4xl">{productInfo?.bookName}</h3>
          <hr />
          <span className="my-4 inline-block text-2xl">
            Author: {productInfo?.author}
          </span>
          <div className="flex justify-between items-center">
            <p className="text-xl">R.S {productInfo?.discountedPrice}</p>
            <del className="text-xl">R.S {productInfo?.originalPrice}</del>
            <span className="text-red-500 text-[12px] text-xl">
              ({productInfo?.discountPercent}%)
            </span>
          </div>

          <span className="text-xl">Ganre: {productInfo?.genre}</span>

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
          <div className="flex gap-7">
            <Button>Add to wishlist</Button>
            <Button>Add to card</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
