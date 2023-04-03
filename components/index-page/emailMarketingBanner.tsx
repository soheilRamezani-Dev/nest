import Image from "next/image";
import SubscribeForm from "../subscribeForm";

const EmailMarketingBanner = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/images/banner-7-min.png")' }}
      className="mt-5 flex rounded-2xl justify-between items-center"
    >
      {/* email marketing banner content */}
      <div className="md:w-5/12 lg:w-1/2 p-12 pl-16 flex flex-col justify-center">
        <h2 className="text-2xl font-medium text-gray-700 mb-4 xl:text-4xl xl:!leading-[4rem]">
          Stay Home & Get Your Daily Needs From Our Shop
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Start Your Daily Shopping With Nest Mart
        </p>
        <SubscribeForm />
      </div>

      {/* email marketing banner image */}
      <div className="hidden md:w-1/2 md:block">
        <Image
          src="/images/banner-9-min.png"
          width={700}
          height={400}
          alt="email marketing image"
        />
      </div>
    </div>
  );
};

export default EmailMarketingBanner;
