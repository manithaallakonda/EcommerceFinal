import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
