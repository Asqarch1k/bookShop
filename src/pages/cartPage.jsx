import PropTypes from "prop-types";
import { instance } from "@/utils/use-request";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import iconBasket from '../../images/icon_basket.svg'

function CartPage({ _id }) {
  return (
    <div onClick={() => navigate("/cart/" + _id)}>
      <div className="py-16 mw-[100%] flex flex-col justify-center items-center">
        <h1 className="text-2xl">
          <b>0 items in Cart</b>
        </h1>
        <div className="max-w-[15%]">
          <img src={iconBasket} alt="heart" />
        </div>
        <h1 className="text-2xl">
          <b>Your cart is empty </b>
        </h1>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#BD5D78] mt-4"
        >
          Go to shop
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
