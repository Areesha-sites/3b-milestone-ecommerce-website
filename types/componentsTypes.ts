export interface NavbarLinksType {
  href: string;
  name: string;
  dropdown: { href: string; name: string }[];
}
export interface SwiperSliderCardPropsType {
  heading: string;
  text: string;
  image: string;
  backgroundText: string;
}
export interface NavbarPropsType {
  openNav: () => void;
}
export interface MobileNavPropsType {
  showNav: boolean;
  closeNav: () => void;
}
export interface ThreeCardsPropsType {
  image: string;
  title: string;
  text: string;
  bgColor: string;
  buttonColor: string;
}
export interface TwoCardsPropsType {
  image: string;
  heading: string;
}
export interface PopularItemsNextArrow {
  onClick: () => void;
}
export interface BlogsCardsPropsTypes {
  id: string;
  image: string;
  author: string;
  comments: number;
  date: string;
  title: string;
  des: string;
}
export interface BlogSideBarDataTypes {
  image: string;
  name: string;
  blogNum: string;
}
export interface menuCardsPropsTypes {
  id: string;
  name: string;
  image: string;
  des: string;
  price: number;
  discount?: string;
  stock?: string;
  reviews: number;
  des1: string;
  des2: string;
  benefits1: string;
  benefits2: string;
  benefits3: string;
  benefits4: string;
  benefits5: string;
}
export interface ServicesCardsPropsTypes {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}
export interface NextArrowsProps {
  onClick: () => void;
}
export interface PrevArrowsProps {
  onClick: () => void;
}
export interface StarterBannerPropsTypes {
  tagline: string;
  title: string;
  des: string;
}
export interface NextArrowsProps {
  onClick: () => void;
}
export interface PrevArrowsProps {
  onClick: () => void;
}
export interface AddToCartPropsTypes {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  imagesList?: string[] | undefined;
  description?: string;
  quantity: number;
}
export interface WishlistItem {
  id: string;
  image: string;
  name: string;
  price: number;
  discount: string;
  stock: string;
}
export interface MenuDetailsPropsTypes {
   id: string;
    name: string;
    image: string;
    price: number;
    discount?: string;
    stock: string;
   quantity?: number
}
export interface PopularCardPropsType {
  id: string,
  name: string,
   image: string,
   price: number,
   discount?: number,
   stock?: number,
   quantity: number
}
export interface FollowProps {
  id: number;
  image: string;
}
