import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import PhoneNumberButton from "../../phoneNumberButton";

const CopyWrite = () => {
  return (
    <>
      <div className=" border-t border-green-500"></div>
      <div className="p-3 my-2 max-w-8xl mx-auto  flex flex-col md:flex-row items-center space-y-5  justify-between">
        {/* first column (copy write)*/}
        <div className="text-gray-400 text-sm lg:text-base">
          <p>
            © 2023, Nest – WordPress Ecommerce Template. All rights reserved
          </p>
        </div>
        {/* second column (phone numbers)*/}
        <div className="hidden lg:flex space-x-5 lg:scale-[85%] mt-0 xl:scale-100">
          <PhoneNumberButton
            phone="1900646666"
            description="Working 8:00 - 22:00"
          />
          <PhoneNumberButton
            phone="09123456789"
            description="24/7 Support Center"
          />
        </div>
        {/* third column (social media)*/}
        <div className="lg:!mt-0">
          <div className="flex space-x-5 justify-center items-center">
            <p className="text-sm lg:text-base font-medium">Follow Us</p>
            <div className="flex space-x-1">
              <FaFacebookF className="green-rounded-full-icon" />
              <FaTwitter className="green-rounded-full-icon" />
              <FaSkype className="green-rounded-full-icon" />
              <FaInstagram className="green-rounded-full-icon" />
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-center text-sm lg:text-base">
            Up to 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </>
  );
};

export default CopyWrite;
