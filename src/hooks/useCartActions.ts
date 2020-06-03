import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, clearCart } from '../store/actions/cartActions';
import { CartItem } from '../store/types/cartItem';

function useCartAction() {

    const history = useHistory();
    const dispatch = useDispatch();

    function BuyNow(book: CartItem) {
        dispatch(clearCart());
        dispatch(addToCart(book));
        history.push(`/cart`)
    }

    function AddToCart(book: CartItem) {
        dispatch(addToCart(book));
    }
    return [AddToCart,BuyNow]
}

export default useCartAction
