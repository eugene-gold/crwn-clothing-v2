import { CartIconContainer, ItemsCount, ShoppingSvg } from "./cart-icon.styles";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

export const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingSvg />
      <ItemsCount>{cartCount}</ItemsCount>
    </CartIconContainer>
  );
};
