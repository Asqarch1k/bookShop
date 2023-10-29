import PropTypes from "prop-types";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import { instance } from "@/utils/use-request";
import iconSvg from "../../images/icon_heart.svg";
import { Link } from "react-router-dom";

function WishList() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await instance.get("/user");
    setData(data.data?.user?.wishlist);
  };
  const click = async (id) => {
    await instance.delete("/wishlist/" + id);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex  mt-5 flex-wrap gap-10">
      {data?.length ? (
        data.map((wishItem) => (
          <Card key={wishItem._id} {...wishItem} handleLikeBtnClick={click} />
        ))
      ) : (
        <div className="py-16 mw-[100%] flex flex-col justify-center items-center mx-auto">
          <h1 className="text-2xl">
            <b>0 items in Wishlist</b>
          </h1>
          <div>
            <img src={iconSvg} alt="" />
          </div>
          <h1 className="text-2xl">
            <b>Your wishlist is empty </b>
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#BD5D78] mt-4"
          >
            Go to shop
          </Link>
        </div>
      )}
    </div>
  );
}
export default WishList;

WishList.propTypes = {
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
};
