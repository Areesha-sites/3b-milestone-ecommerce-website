export interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
}
export const getWishlist = (): WishlistItem[] => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};
export const addToWishlist = (item: WishlistItem) => {
  const wishlist = getWishlist();
  const alreadyInWishlist = wishlist.find(
    (i: WishlistItem) => i.id === item.id
  );

  if (!alreadyInWishlist) {
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id: string) => {
  let wishlist = getWishlist();
  wishlist = wishlist.filter((item: WishlistItem) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
