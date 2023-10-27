import PropTypes from "prop-types";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { genres } from "@/constants/genre";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Shop({
  products,
  selectedGenres,
  setSelectedGenres,
  handleLikeBtnClick,
  wishList,
}) {
  const [sliderValues, setSliderValues] = useState({
    min: 0,
    max: 0,
  });
  const [range, setRange] = useState([sliderValues?.min, sliderValues?.max]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  const handleRangeChange = (value) => {
    setRange(value);
  };


  useEffect(() => {
    if (!selectedGenres.length) {
      setSelectedGenres([...genres]);
    }
  }, []);
  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
      setLatestProducts(products);
    }
  }, [products]);

  useEffect(() => {
    if (products.length) {
      setSliderValues(
        products.reduce(
          (acc, curr) =>
            curr.originalPrice > acc.max
              ? { ...acc, max: curr.originalPrice }
              : acc,
          { min: 0, max: 0 }
        )
      );
    }
  }, [products]);

  useEffect(() => {
    let newProducts = products.filter(
      (product) =>
        (product.discountedPrice >= range[0] ||
          product.originalPrice >= range[0]) &&
        (product.discountedPrice <= range[1] ||
          product.originalPrice <= range[1])
    );

    newProducts = newProducts.filter(
      (pr) =>
        selectedGenres.findIndex(
          (gr) => gr.title.toUpperCase() == pr.genre.toUpperCase()
        ) !== -1
    );

    setFilteredProducts([...newProducts]);
    setLatestProducts([...newProducts]);
  }, [range, selectedGenres]);
  // =====================================
  const lowToHigh = () => {
    const filterPriceLow = filteredProducts.sort(
      (a, b) => a.discountedPrice - b.discountedPrice
    );
    setFilteredProducts([...filterPriceLow]);
  };

  const highToLow = () => {
    const filterPriceHigh = filteredProducts.sort(
      (a, b) => b.discountedPrice - a.discountedPrice
    );
    setFilteredProducts([...filterPriceHigh]);
  };

  const filterRating = (rating) => {
    const filteredProductForRating = latestProducts.filter(
      (el) => el.rating == rating
    );

    setFilteredProducts([...filteredProductForRating]);
  };

  // =====================================
  useEffect(() => {
    setRange([sliderValues.min, sliderValues.max]);
  }, [sliderValues]);

  const handleGenreChange = (title) => {
    const currentGrIdx = selectedGenres.findIndex((gr) => gr.title == title);
    if (currentGrIdx === -1) {
      setSelectedGenres((prev) => [...prev, { title }]);
    } else {
      selectedGenres.splice(currentGrIdx, 1);
      setSelectedGenres([...selectedGenres]);
    }
  };
  const onClear = () => {
    setSelectedGenres([...genres]);
    setRange([0, sliderValues.max]);
  };

  return (
    <div className="flex justify-between border-2 border-black-600">
      <div className="border-r-2 mr-15 w-[275px] p-4">
        <Button onClick={onClear} className="mb-5">
          Clear Filter
        </Button>
        <div className="flex flex-col justify-center gap-4">
          <h1>Price</h1>
          <div className="flex items-center gap-3">
            <label className="flex gap-2 items-center">
              Min
              <input
                className="border-2 w-16"
                type="number"
                min={0}
                value={range[0]}
              />
            </label>
            -
            <label className="flex gap-2 items-center">
              Max
              <input
                className="border-2 w-16"
                type="number"
                max={1000}
                value={range[1]}
              />
            </label>
          </div>
          <Slider
            defaultValue={[sliderValues.min, sliderValues.max]}
            max={sliderValues?.max}
            min={0}
            step={0.5}
            value={range}
            onValueChange={handleRangeChange}
            formatLabel={(value) => `${value} `}
            className="w-[210px] mt-6"
          />
        </div>
        <div className="mt-10 ml-6  ">
          {genres.map((genre) => (
            <div className="flex items-center space-x-2 mt-2" key={genre.title}>
              <Checkbox
                id={genre.title}
                checked={
                  selectedGenres.findIndex((gr) => gr.title == genre.title) !==
                  -1
                }
                onCheckedChange={() => handleGenreChange(genre.title)}
              />
              <Label
                htmlFor={genre.title}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {genre.title}
              </Label>
            </div>
          ))}
        </div>
        <div className="ml-6 mt-5">
          <Label htmlFor="r1" className="underline text-xl">
            Sort By
          </Label>
          <RadioGroup defaultValue="comfortable" className="mt-2">
            <div className="flex items-center space-x-2" onClick={lowToHigh}>
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Price - Low to High</Label>
            </div>
            <div className="flex items-center space-x-2" onClick={highToLow}>
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Price - High to Low</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-6 flex flex-col gap-2 ml-6">
          <label className="flex item-center gap-2">
            <input
              type="radio"
              value="4"
              name="rating"
              onClick={(e) => {
                filterRating(Number(e.target.value));
              }}
            />
            4 stars or above
          </label>
          <label className="flex item-center gap-2">
            <input
              type="radio"
              value="3"
              name="rating"
              onClick={(e) => {
                filterRating(Number(e.target.value));
              }}
            />
            3 stars or above
          </label>
          <label className="flex item-center gap-2">
            <input
              type="radio"
              value="2"
              name="rating"
              onClick={(e) => {
                filterRating(Number(e.target.value));
              }}
            />
            2 stars or above
          </label>
          <label className="flex item-center gap-2">
            <input
              type="radio"
              value="1"
              name="rating"
              onClick={(e) => {
                filterRating(Number(e.target.value));
              }}
            />
            1 stars or above
          </label>
        </div>
      </div>

      <div className="flex w-[1000px] gap-6 justify-between mt-8  flex-wrap ml-8 ">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Card
              key={product._id}
              {...product}
              handleLikeBtnClick={handleLikeBtnClick}
              isLiked={
                wishList.findIndex(
                  (wishItem) => wishItem._id === product._id
                ) === -1
              }
            />
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    </div>
  );
}
export default Shop;

Shop.propTypes = {
  sliderValues: PropTypes.object,
  setSliderValues: PropTypes.func,
  products: PropTypes.array,
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  handleLikeBtnClick: PropTypes.func,
  wishList: PropTypes.array,
};
