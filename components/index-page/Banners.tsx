import { collection, getDocs } from "firebase/firestore";
import database from "../../firebase/firestore";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

type BannerItem = { title: string; image: string; link: string };

const Banners = () => {
  const [banners, setBanners] = useState<BannerItem[]>();
  const getBanners = async () => {
    let data: BannerItem[] = [];
    const snaoshot = await getDocs(
      collection(database, "setting/banner/banners-item")
    );
    snaoshot.forEach((banner) => {
      data = [...data, banner.data() as BannerItem];
    });
    console.log(snaoshot);
    setBanners(data as BannerItem[]);
  };
  useEffect(() => {
    getBanners();
  }, []);
  return (
    <div>
      <ul className="p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {banners?.map((banner, index) => (
          <li
            className={`banner-item rounded-xl border relative overflow-hidden cursor-pointer hover:opacity-90 ${
              (index + 1) % 3 === 0 && index + 1 === banners.length
                ? "md:col-span-full lg:col-span-1"
                : ""
            }`}
          >
            <a href="#">
              <Image
                src={`/images/${banner.image}`}
                alt={`banner of ${banner.title}`}
                width={768}
                height={450}
                className="w-full image"
              />
              <div className="w-1/3 md:w-1/2 flex flex-col justify-center space-y-5 h-full absolute top-0 left-14">
                <h3 className="text-2xl md:text-[20px] lg:text-xl">
                  {banner.title}
                </h3>
                <button className="green-button w-36 flex justify-between items-center">
                  Shop Now <BsArrowRight />
                </button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banners;
