import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types/rootStoreType';

type Props = {};

const NavBar: React.FC<Props> = () => {
    const itemsInCart = useSelector((state: RootState) => state.cartItems.items.length);
    return (
        <Fragment>
            <div className="logo">
                <NavLink to="/">
                    <h2>Buy Books</h2>
                </NavLink>
            </div>
            <nav>
                <ul className="menu-items">
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/orders">My orders</NavLink></li>
                    <li className="cart-menu"><NavLink exact activeClassName="active" to="/cart">Cart</NavLink><span className="badge">{itemsInCart}</span></li>           
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar
