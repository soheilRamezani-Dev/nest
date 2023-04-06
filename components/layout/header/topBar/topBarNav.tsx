import { Menu } from "../../../types";

const TopBarNav = ({ topBarMenu }: { topBarMenu: Menu }) => {
  return (
    <div>
      <ul className="flex text-sm font-light justify-center space-x-0">
        {topBarMenu?.children.map((menuItem) => (
          <li className=" border-r px-4 m-2" key={menuItem.id}>
            <a href={menuItem.url} className=" cursor-pointer">
              {menuItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBarNav;
