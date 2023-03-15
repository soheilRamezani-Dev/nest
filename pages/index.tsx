import Banners from "../components/index-page/Banners";
import FeaturedCategories from "../components/index-page/featuredCategories";
import PopularProducts from "../components/index-page/popularProducts";
import Slider from "../components/index-page/slider";

const MainPage = () => {
  return (
    <div className="max-w-8xl p-3 mx-auto">
      {/* subscribe slider */}
      <Slider />
      {/* featured category */}
      <FeaturedCategories />
      {/* banners */}
      <Banners />
      {/* popular products */}
      <PopularProducts />
      {/* daily best sells */}
      {/* deals of the day */}
      {/* top selling */}
      {/* trending products */}
      {/* recently added */}
      {/* top rated */}
      {/* subscribe banner */}
    </div>
  );
};

export default MainPage;
