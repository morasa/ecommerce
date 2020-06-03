import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types/rootStoreType';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/actions/cartActions';
import { createOrder } from '../../store/actions/orderActions';
import { Order } from '../../store/types/orderType';
import { DateFormat } from '../../utils/DateFormat';
import  AddressForm  from './AddressForm';
type Props = {};

const Cart: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const itemsInCart = useSelector((state: RootState) => state.cartItems.items);
    const itemsCost = itemsInCart?.length && itemsInCart.reduce((acc, book) => acc + book.price, 0)
    const shippingCost = itemsCost * 0.2 | 0;
    const taxCost = shippingCost * 0.14 | 0;
    const totalCost = itemsCost + shippingCost + taxCost | 0;

    function handleCancel() {
        dispatch(clearCart());
    }

    function handleCheckout() {
        if (itemsInCart.length) {
            const currentOrder: Order = {
                "id": DateFormat().timestamp,
                "status": "Delivered",
                "placed_date": DateFormat().formatedDate,
                "items": itemsInCart
            }
            dispatch(createOrder(currentOrder));
            dispatch(clearCart());
        }
    }

    return (
        <Fragment>
            <div className="cart">
                <div className="cart-address">
                    <div className="cart-address-title">
                        {"Shipping Address (All fields required)"}
                    </div>
                    <AddressForm />
                </div>
                <div className="cart-checkout" >
                    <div className="cart-checkout-title">{"Shopping Bag"}</div>
                    <div className="booksContainer">
                        <ul>
                            {
                                itemsInCart?.length > 0 ? itemsInCart.map((book, index) =>
                                    <li className="order_item" key={index}>
                                        <div>{book.title}</div>
                                        <div className="price">{book.price}</div>
                                    </li>) : <li className="cart-no-items">Add Items to cart</li>
                            }
                        </ul>
                    </div>
                    <div className="paymentContainer">
                        <div className="title">Payment Info</div>
                        <div className="paymentContainer-item">
                            <div>Items Price</div>
                            <div className="price">{itemsCost}</div>
                        </div>
                        <div className="paymentContainer-item">
                            <div>Tax</div>
                            <div className="price">{taxCost}</div>
                        </div>
                        <div className="paymentContainer-item">
                            <div>Shipping Charges</div>
                            <div className="price">{shippingCost}</div>
                        </div>
                        <hr />
                        <div className="paymentContainer-item">
                            <div>Total</div>
                            <div className="price">{totalCost}</div>
                        </div>
                        <div className="paymentContainerButtons">
                            <button type="button" className="checkout-button" onClick={handleCheckout}>Checkout</button>
                            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart