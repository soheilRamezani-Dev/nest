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
};
