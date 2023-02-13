import DropDown from "../../dropDown";
import { Menu } from "../../types";
import TopBarNav from "./topBarNav";
import TopBarNewsSlider from "./topBarNewsSlider";

const TopBar = ({ topBarMenu }: { topBarMenu: Menu }) => {
  //console.log(topBarMenu);
  return (
    <div>
      {/* mobile top banner */}
      <div className="text-center text-sm py-4 bg-[url('/images/notice.jpg')] bg-cover bg-center rounded-md font-medium md:hidden">
        Senior’s Member Discount Days! Save 25% Each Tuesday
      </div>

      {/* more than md screen top nav-menu */}
      <div className=" border-b">
        <div className="max-w-8xl mx-auto hidden md:block xl:flex xl:justify-between">
          {/* navbar */}
          <TopBarNav topBarMenu={topBarMenu} />

          {/* trend news slider */}
          <TopBarNewsSlider />

          {/* top info  phone number , language , currency */}
          <div className="text-sm flex justify-center mb-2 xl:mt-2">
            <div className="border-r px-4 ">
              Need help? Call Us:{" "}
              <a className="text-green-600" href="tel:123-456-789">
                123-456-789
              </a>
            </div>

            <div className="border-r">
              <DropDown
                defaultValueIndex={0}
                values={["English", "Français", "Deutsch", "Pусский"]}
              />
            </div>
            <div>
              <DropDown
                defaultValueIndex={0}
                values={["INR", "USD", "MBP", "EU"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
