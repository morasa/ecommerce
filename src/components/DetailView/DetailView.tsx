import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types/rootStoreType';
import useCartAction from '../../hooks/useCartActions';
import { CartItem } from '../../store/types/cartItem';

type Params = {
    book_id: string
}

type Props = {};

const DetailView: React.FC<Props> = () => {
    const params: Params = useParams();
    const [{ author, thumbnail_url, title, description, price, pagesCount, bib_key }] = useSelector((state: RootState) => state.items.items.filter((book) => book.bib_key === params.book_id))

    const [AddToCart, BuyNow] = useCartAction();

    function handleAddToCart() {
        const book: CartItem = {
            bib_key,
            title,
            price,
            thumbnail_url,
            author
        }
        AddToCart(book);
    }

    function handleBuyNow() {
        const book: CartItem = {
            bib_key,
            title,
            price,
            thumbnail_url,
            author
        }
        BuyNow(book);
    }

    return (
        <Fragment>
            <div className="detail-view">
                <div className="detail-view-book">
                    <img className="detail-view-book-img" src={thumbnail_url} alt={thumbnail_url} title={thumbnail_url} />
                </div>
                <div className="detail-view-content">
                    <div className="book-details">
                        <h1 className="book-title">{title}</h1>
                        <p className="book-author"><b> By : </b> <span>{author}</span></p>
                        <p className="book-price"> <b> Price : </b><span>&#8377;</span> {price}</p>
                        <p className="book-pages"> <b> Pages : </b><span>{pagesCount}</span></p>
                    </div>
                    <div className="book-action-buttons">
                        <button className="buy-button buy-button-l" onClick={handleAddToCart}>Add To Cart</button>
                        <button className="buy-button buy-button-l" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                    <p className="book-description">
                        {description}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default DetailView