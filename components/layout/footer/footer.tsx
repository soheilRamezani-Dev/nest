import { useEffect, useState } from "react";
import Features from "./features";
import { doc, getDoc } from "firebase/firestore";
import database from "../../../firebase/firestore";
import Image from "next/image";
import {
  CiHeadphones,
  CiLocationOn,
  CiMail,
  CiTimer,
  CiVoicemail,
} from "react-icons/ci";
import FooterMenu from "./footerMenu";

export type Feature = {
  title: string;
  description: string;
  icon: string;
};
const Footer = () => {
  const [features, setFeatures] = useState<Feature[]>();
  const getFeaturesFromServer = async () => {
    const docRef = doc(database, "setting", "features");
    const snapshot = await getDoc(docRef);
    console.log(snapshot.data());
    setFeatures(snapshot.data()?.items);
  };
  useEffect(() => {
    getFeaturesFromServer();
  }, []);
  return (
    <div className="p-3 max-w-8xl mx-auto">
      {/* features list */}
      <div className="mt-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {features?.map((item) => (
          <Features
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>

      {/* main footer */}
      <div className="px-5 md:px-0 text-gray-600 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-5">
        {/* logo & address & contact */}
        <div className="pr-7">
          {/* logo */}
          <div>
            <Image
              src="/images/logo.svg"
              width={200}
              height={62}
              alt="logo in footer"
            />
          </div>
          {/* description */}
          <p className="mt-5">Awesome grocery store website template</p>
          {/* contact & address */}
          <ul className="mt-7 space-y-3">
            <li className="space-x-2 items-center">
              <CiLocationOn className="green-small-icon" />
              <span>
                <span className="font-medium">address </span>
                <span>
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </span>
              </span>
            </li>
            <li className="space-x-2 items-center">
              <CiHeadphones className="green-small-icon" />
              <span>
                <span className="font-medium">Call Us </span>
                <a className="green-link" href="tel:(+91)-540-025-124553">
                  (+91)-540-025-124553
                </a>
              </span>
            </li>
            <li className="space-x-2 items-center">
              <CiMail className="green-small-icon" />
              <span>
                <span className="font-medium">Email </span>
                <a className="green-link" href="mailto:sale@Nest.com">
                  sale@Nest.com
                </a>
              </span>
            </li>
            <li className="space-x-2 items-center">
              <CiTimer className="green-small-icon" />
              <span className="font-medium">Hours </span>

              <span> 10:00 - 18:00, Mon - Sat </span>
            </li>
          </ul>
        </div>

        {/* first two columns of footer menu */}
        <div className="flex justify-between">
          {/* first column */}
          <FooterMenu
            menuHead="Company"
            menuItems={[
              { title: "About Us", url: "#" },
              { title: "Privacy Policy", url: "#" },
              { title: "Terms & Conditions", url: "#" },
              { title: "Contact Us", url: "#" },
              { title: "Support Center", url: "#" },
              { title: "Careers", url: "#" },
            ]}
          />

          {/* second column */}
          <FooterMenu
            menuHead="Account"
            menuItems={[
              { title: "About Us", url: "#" },
              { title: "Privacy Policy", url: "#" },
              { title: "Terms & Conditions", url: "#" },
              { title: "Contact Us", url: "#" },
              { title: "Support Center", url: "#" },
              { title: "Careers", url: "#" },
            ]}
          />
        </div>

        {/* second two columns of footer menu */}
        <div className="flex justify-between">
          {/* first column */}
          <FooterMenu
            menuHead="Corporate"
            menuItems={[
              { title: "About Us", url: "#" },
              { title: "Privacy Policy", url: "#" },
              { title: "Terms & Conditions", url: "#" },
              { title: "Contact Us", url: "#" },
              { title: "Support Center", url: "#" },
              { title: "Careers", url: "#" },
            ]}
          />

          {/* second column */}
          <FooterMenu
            menuHead="Popular"
            menuItems={[
              { title: "About Us", url: "#" },
              { title: "Privacy Policy", url: "#" },
              { title: "Terms & Conditions", url: "#" },
              { title: "Contact Us", url: "#" },
              { title: "Support Center", url: "#" },
              { title: "Careers", url: "#" },
            ]}
          />
        </div>
        {/* install app */}
        <div>
          <h3 className="text-3xl font-medium my-3">Install App</h3>
          <p> From App Store or Google Play</p>
          <div className="flex space-x-5 my-10">
            <Image
              src="/images/google-play.jpg"
              alt="download android app"
              width={202}
              height={67}
            />
            <Image
              src="/images/appstore.jpg"
              alt="download android app"
              width={202}
              height={67}
            />
          </div>
          <p>Secured Payment Gateways</p>
          <Image
            className="mt-5"
            src="/images/payment-method.png"
            alt="payment gateway"
            width={224}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
