type MenuItems = { title: string; url: string }[];

const FooterMenu = ({
  menuItems,
  menuHead,
}: {
  menuItems: MenuItems;
  menuHead: string;
}) => {
  return (
    <div className="w-1/2">
      <h3 className="text-3xl font-medium my-3">{menuHead}</h3>
      <ul>
        {menuItems.map((item) => (
          <li className="my-5">
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
