import PropTypes from "prop-types";
import Genres from "@/components/genres";
import NewArrivals from "@/components/new-arrivals";
import img from "../../images/Library_Illustration_1.c54dafea582d6757c53e.jpg";

function Home({ selectedGenres, setSelectedGenres, wishList, setWishList }) {
  return (
    <div className="mt-3">
      <img src={img} alt="" />

      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <NewArrivals setWishList={setWishList} wishList={wishList} />
      <footer className="flex justify-around bg-colo bg-slate-800 p-4 mt-8">
        <div>
          <h1 className="text-white text-xl mb-4">ABOUT</h1>
          <ul className="flex flex-col gap-2">
            <li className="text-slate-400">Contact us</li>
            <li className="text-slate-400">About us</li>
            <li className="text-slate-400">Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-xl mb-4">HELP</h1>
          <ul className="flex flex-col gap-2">
            <li className="text-slate-400">Contact us</li>
            <li className="text-slate-400">About us</li>
            <li className="text-slate-400">Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-xl mb-4">SOCIALS</h1>
          <ul className="flex flex-col gap-2">
            <li className="text-slate-400">Contact us</li>
            <li className="text-slate-400">About us</li>
            <li className="text-slate-400">Careers</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Home;

Home.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
};
