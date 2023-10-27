import PropTypes from "prop-types";
import { instance } from "@/utils/use-request";
import { useNavigate } from "react-router-dom";

function CartPage({_id,}) {
  //   const [data, setData] = useState([]);
  //   const getData = async () => {
  //     const data = await instance.get("/user");
  //     setData(data.data?.user?.wishlist);
  //   };
  //   const click = async (id) => {
  //     await instance.delete("/cart/" + id);
  //     getData();
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
//   const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/cart/" + _id)}>
      <h1>salom</h1>
    </div>
  );
}

export default CartPage;
