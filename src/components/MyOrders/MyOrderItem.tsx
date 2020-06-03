import React, { Fragment } from 'react';
import logo from '../../assets/img/kalki-sm.jpeg';

type Props = {};

const MyOrderItem: React.FC<Props> = () => {
    return (
        <Fragment>
            <div className="my-order-book">
                <div>
                    <img className="my-order-book_img" src={logo} alt={'Satyayoddha Kalki'} />
                </div>
                <div className="flex-col my-order-book_details">
                    <div className="my-order-book_booktitle"><p>{'Satyayoddha Kalki'}</p></div>
                    <div>Author Name  <span className="author_container">{'Kevin Missal'}</span></div>
                    <div>Book Price <span className="price"><span>&#8377;</span> {4995}</span></div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyOrderItem