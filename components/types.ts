import { Timestamp } from "firebase/firestore";

export type SubMenuItem = {
  title: string;
  url: string;
  children?: SubMenuItem[];
};
export type MenuItem = {
  id: string;
  title: string;
  url: string;
  type?: "twoLevel" | "threeLevel";
  children?: SubMenuItem[];
};
export type Menu = {
  id: string;
  title: string;
  children: MenuItem[];
  url?: string;
  showInMobile?: boolean;
};
export type ProductCartInfo = {
  id: string;
  categoryId: string;
  title: string;
  url: string;
  banner: string;
  image1: string;
  image2: string;
  seller: string;
  sell_count: number;
  discount: number;
  max_price: number;
  min_price: number;
  rate: number;
  rate_count: number;
  seller_link: string;
  visit_count: number;
  time: Timestamp;
  count: number;
  discount_expire_time?: Timestamp;
  time_of_submit: Timestamp;
};
export type Category = {
  id: string;
  title: string;
  url: string;
};
