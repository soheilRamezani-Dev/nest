import database from "../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type SliderInfo = {
  id: string;
  title?: string;
  description?: string;
  image: string;
  linkUrl?: string;
};

const Slider = () => {
  const [slidersInfo, setSliderInfo] = useState<SliderInfo[]>();
  const [activeSlide, setActiveSlide] = useState<string>();
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);

  // for use setInterval we should use ref for states becaus when we use state in -
  // setTimeout and setInterval these functins use state when scaduled and when state change then  -
  // timeOut and Interval cant find out. and we should use Ref addition of state.
  const activeSlideRef = useRef(activeSlide);
  const sliderInfoRef = useRef(slidersInfo);
  sliderInfoRef.current = slidersInfo;
  activeSlideRef.current = activeSlide;

  // getSliderInfo gets all subscribe slider from firestore and update SliderInfo and activeSlide States
  // this function called in useEffect
  const getSliderItems = async () => {
    const docRef = doc(database, "setting", "subscribe-slider");
    const data = await getDoc(docRef);
    setSliderInfo(data.data()?.items as SliderInfo[]);
    setActiveSlide((data.data()?.items as SliderInfo[])[0].id);
  };

  // find index of slide in array of sliderInfo with give id of slide
  const getIndexOfSlide = (id: string) => {
    return sliderInfoRef.current?.indexOf(
      sliderInfoRef.current?.find((slide) => slide.id === id) as SliderInfo
    );
  };

  // next slide function is for go to next slide
  // its called in interval of useEffect an when right arrow clicked
  const nextSlide = () => {
    const activeSlideIndex = getIndexOfSlide(activeSlideRef.current as string);
    if (
      (activeSlideIndex as number) + 1 <
      (sliderInfoRef.current as SliderInfo[])?.length
    ) {
      setActiveSlide(
        (sliderInfoRef.current as SliderInfo[])[
          (activeSlideIndex as number) + 1
        ].id
      );
    } else {
      setActiveSlide((sliderInfoRef.current as SliderInfo[])[0].id);
    }
  };

  // prev slide function is for go to prev slide
  // its called just when left arrow clicked
  const prevSlide = () => {
    const activeSlideIndex = getIndexOfSlide(activeSlideRef.current as string);
    const sliderLength = (sliderInfoRef.current as SliderInfo[]).length;
    if ((activeSlideIndex as number) > 0) {
      setActiveSlide(
        (sliderInfoRef.current as SliderInfo[])[
          (activeSlideIndex as number) - 1
        ].id
      );
    } else {
      setActiveSlide(
        (sliderInfoRef.current as SliderInfo[])[sliderLength - 1].id
      );
    }
  };

  // when click on each circle on bottom of slider
  const selectSlideHandler = (id: string) => {
    setActiveSlide(id);
  };

  // i define seprate function for interval and get out that from useEffect
  // to access that on out of useEffect becaus i want when user mouse enter to slider
  // intervall should be clear and when mouse leave intervall should active again

  useEffect(() => {
    getSliderItems();

    // with setInterval we change state of activeSlide

    // i define seprate state (isMouseInside) to find is mouse inside of slider?
    // if is inside then run clearInteval for deactive nextslide() automation
    //and if is out then start automation nextslide()
    let interval: NodeJS.Timeout | null;
    if (!isMouseInside) {
      //if mouse is not in slider then automotive move next slide should start!
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    } else {
      //if mouse is in slider then automotive move next slide should stop!
      clearInterval(
        setInterval(() => {
          nextSlide();
        }, 5000)
      );
    }
    return () => {
      interval && clearInterval(interval);
    };
  }, [isMouseInside]);

  return (
    <div
      className="p-1 relative my-2 subscribe-slider"
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
    >
      <ul className="relative h-[350px] xl:h-[560px]">
        {slidersInfo?.map((item) => (
          <li
            key={item.id}
            style={{ backgroundImage: `url(${item.image})` }}
            className={`absolute top-0 w-full h-full bg-no-repeat bg-cover xl:px-32 p-8 rounded-3xl transition-all duration-1000 ${
              activeSlide === item.id
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            <div className="xl:w-1/2 lg:w-3/5 flex flex-col justify-center h-full space-y-6 xl:space-y-12 relative text-center lg:text-left">
              <h3 className="text-5xl xl:text-7xl font-medium text-gray-700">
                {item.title}
              </h3>
              <p className=" text-xl xl:text-2xl text-gray-400">
                {item.description}
              </p>
              <div className="relative lg:w-2/3 text-sm xl:text-lg">
                <input
                  className="w-full rounded-full py-3 xl:py-5 px-5"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="bg-green-600 text-white py-3 xl:py-5 px-5 rounded-full absolute right-0">
                  Subscribe
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* arrow icons for go next and previous slide */}
      <BsChevronLeft onClick={prevSlide} className="slider-arrow left-0" />
      <BsChevronRight onClick={nextSlide} className="slider-arrow right-0" />

      {/* circle carousel */}
      <div className="absolute bottom-3 w-full">
        <ul className="flex justify-center space-x-2">
          {slidersInfo?.map((item) => (
            <li
              onClick={() => selectSlideHandler(item.id)}
              key={item.id}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                activeSlide === item.id
                  ? "bg-green-600 border border-green-600"
                  : "bg-transparent border border-black"
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
