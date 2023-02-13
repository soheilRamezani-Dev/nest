import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type MenuItem =
  | {
      title: string;
      url: string;
      children?: undefined;
    }
  | {
      title: string;
      url: string;
      children: (
        | {
            title: string;
            url: string;
          }
        | undefined
      )[];
    };

const SubMenuItem = ({ activemenueItem }: { activemenueItem: MenuItem }) => {
  const [isOpenSubs, setIsOpenSubs] = useState(false);
  return (
    <li className="py-2 border-b">
      <div
        onClick={() => {
          setIsOpenSubs((prevState) => !prevState);
        }}
        className="flex justify-between cursor-pointer"
      >
        <div>{activemenueItem.title}</div>
        <div>
          {" "}
          <RiArrowDropDownLine
            className={`w-6 h-6 ${
              activemenueItem.children ? "inline-block" : "hidden"
            }`}
          />
        </div>
      </div>
      {/* sub Items */}
      <ul
        className={`p-1 transition-all duration-500 overflow-hidden ${
          isOpenSubs ? "max-h-40 " : "max-h-0"
        }`}
      >
        {activemenueItem.children?.map((subitem, index) => (
          <li key={index} className="p-2 text-sm">
            <a href={subitem?.url}>{subitem?.title}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenuItem;
