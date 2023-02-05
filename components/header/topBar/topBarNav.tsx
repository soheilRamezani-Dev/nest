const TopBarNav = () => {
  return (
    <div>
      <ul className="flex text-sm font-light justify-center space-x-0">
        <li className=" border-r px-4 m-2">
          <a href="/" className=" cursor-pointer">
            About Us
          </a>
        </li>
        <li className=" border-r px-4 m-2">
          <a href="/" className=" cursor-pointer">
            My Account
          </a>
        </li>
        <li className=" border-r px-4 m-2">
          <a href="/" className=" cursor-pointer">
            Wishlist
          </a>
        </li>
        <li className="px-4 m-2">
          <a href="/" className=" cursor-pointer">
            Order Tracking
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBarNav;
