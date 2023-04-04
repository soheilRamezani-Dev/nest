import { useState } from "react";
import { useEffect } from "react";
const TopBarNewsSlider = () => {
  const newsApi = [
    "100% Secure delivery without contacting the courier",
    "Supper Value Deals - Save more with coupons",
    "Trendy 25silver jewelry, save up 35% off today",
  ];
  const [activenew, setActiveNew] = useState(0);
  useEffect(() => {
    const topNewsSlider = setTimeout(() => {
      if (activenew >= newsApi.length - 1) setActiveNew(0);
      else setActiveNew((currentValue) => currentValue + 1);
    }, 2000);
    return () => {
      clearTimeout(topNewsSlider);
    };
  }, [activenew]);

  return (
    <div className="h-8 overflow-hidden relative min-w-30 top-1">
      <ul
        className={`text-green-600 mx-auto inset-x-0 text-sm font-bold flex flex-col transition-all absolute top--${
          activenew * 28
        }`}
      >
        {newsApi.map((value, index) => (
          <li key={index} className="text-center my-1">
            <a href="/" className="">
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBarNewsSlider;
