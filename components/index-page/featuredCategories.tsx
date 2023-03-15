import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ElementRef, useEffect, useRef, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import database from "../../firebase/firestore";

type Categories = { title: string; slug: string; icon: string; count: string };

const FeaturedCategories = () => {
  const [categories, setCategories] = useState<Categories[] | null>(null);
  const [lefttPositionAmount, seTLeftPositionAmount] = useState(0);
  const categoriesWraperElement = useRef<HTMLUListElement>(null);
  // get top level categories from firestore
  const getCategories = async () => {
    const snapshot = await getDocs(collection(database, "category"));
    let data: Categories[] = [];
    snapshot.forEach((doc) => {
      data = [...data, doc.data() as Categories];
    });
    setCategories(data);
  };
  useEffect(() => {
    //with getCategories we set categories in categories state
    getCategories();
    window.addEventListener("resize", () => {
      const screenWidth = window.innerWidth;
      const categoriesWraperWidth = Number(
        categoriesWraperElement.current?.offsetWidth
      );
      // console.log({
      //   screenWidth: screenWidth,
      //   categoriesWraperWidth: categoriesWraperWidth,
      //   lefttPositionAmount: lefttPositionAmount,
      // });
      if (
        lefttPositionAmount <= 0 &&
        Math.abs(lefttPositionAmount) > categoriesWraperWidth - screenWidth
      ) {
        if (screenWidth < categoriesWraperWidth) {
          seTLeftPositionAmount(-categoriesWraperWidth + screenWidth - 50);
        } else {
          seTLeftPositionAmount(1);
        }
      }
    });
  }, [lefttPositionAmount]);
  const colors = [
    "#f2fce4",
    "#FFFCEB",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
  ];
  const slideRightHandler = () => {
    const screenWidth = window.innerWidth;
    const categoriesWraperWidth = Number(
      categoriesWraperElement.current?.offsetWidth
    );
    if (Math.abs(lefttPositionAmount) <= categoriesWraperWidth - screenWidth) {
      seTLeftPositionAmount((prev) => prev - 163);
    }
  };
  const slideLeftHandler = () => {
    console.log(lefttPositionAmount);
    if (lefttPositionAmount <= -163) {
      seTLeftPositionAmount((prev) => prev + 163);
    }
  };
  return (
    <div className="mt-7 p-1 w-full overflow-hidden relative h-72">
      <div className="flex justify-between">
        <h2 className="h2-title">Featured Categories</h2>
        <div className="flex space-x-2">
          <BsArrowLeft
            className="featured-category-arrow"
            onClick={slideLeftHandler}
          />
          <BsArrowRight
            className="featured-category-arrow"
            onClick={slideRightHandler}
          />
        </div>
      </div>
      <ul
        ref={categoriesWraperElement}
        className="flex mt-7 space-x-5 absolute transition-all duration-200"
        style={{ left: lefttPositionAmount + "px" }}
      >
        {categories?.map((catItem, index) => (
          <li
            key={index}
            className=" border border-gray-200 rounded-xl w-36 p-3 cursor-pointer flex-shrink-0"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <a
              className="flex flex-col justify-around items-center h-40"
              href={`/category/${catItem.slug}`}
            >
              <Image
                className="w-20 h-20"
                src={`/images/${catItem.icon}`}
                width={124}
                height={124}
                alt={`${catItem.title} category`}
              />
              <div className="text-center">
                <p className="font-medium">{catItem.title}</p>
                <p className="text-gray-500 mt-1">{catItem.count} items</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedCategories;
