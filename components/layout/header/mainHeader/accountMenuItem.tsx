import { IconType } from "react-icons/lib";

const AccountMenuItem = ({
  Icon,
  title,
}: {
  Icon: IconType;
  title: string;
}) => {
  return (
    <>
      <Icon className="inline w-7 h-7" />
      <span className="px-2 text-gray-500 hidden lg:inline leading-7">
        {title}
      </span>
    </>
  );
};

export default AccountMenuItem;
