import React, { Fragment } from 'react';
import MyOrderItem from './MyOrderItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types/rootStoreType';
import { Order } from '../../store/types/orderType';
import { CartItem } from '../../store/types/cartItem';

type Props = {};

const MyOrders: React.FC<Props> = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <Fragment>
      <div className="my-orders-container">
        {
          orders.length && orders.map((order: Order, index) =>
            <div key={index} className="my-order">
              <div className="my-order-status">
                <div>Order Placed : {order.placed_date}</div>
                <div>Status : {order.status}</div>
              </div>
              <div className="my-order-book-container">
                {
                  order.items.length && order.items.map((item: CartItem) =>
                    <MyOrderItem key={item.bib_key} {...item}></MyOrderItem>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </Fragment>
  )
}

export default MyOrders