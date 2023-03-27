import Banners from "../components/index-page/Banners";
import DailyBestSells from "../components/index-page/dailyBestSells";
import DealsOfTheDay from "../components/index-page/dealsOfTheDay";
import FeaturedCategories from "../components/index-page/featuredCategories";
import PopularProducts from "../components/index-page/popularProducts";
import Slider from "../components/index-page/slider";
import TopsProducts from "../components/index-page/tops-products/topsProducts";

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
      <DailyBestSells />
      {/* deals of the day */}
      <DealsOfTheDay />
      {/* top selling */}
      <TopsProducts />
      {/* trending products */}
      {/* recently added */}
      {/* top rated */}
      {/* subscribe banner */}
    </div>
  );
};

export default MainPage;
