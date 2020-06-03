import React, { SyntheticEvent } from 'react'
import { Item } from '../../store/types/itemType';
import { useHistory } from 'react-router-dom'
import useCartAction from '../../hooks/useCartActions';
import { CartItem } from '../../store/types/cartItem';

type Props = Item

const Book: React.FC<Props> = ({ bib_key, title, thumbnail_url, price, author }) => {
    const [AddToCart] = useCartAction();
    const history = useHistory();

    function NavToDetailsPage(event: SyntheticEvent) {
        history.push(`/details/${bib_key}`)
        event.stopPropagation();
    }

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

    return (
        <div className="book">
            <img onClick={(e) => NavToDetailsPage(e)} className="book-image" src={thumbnail_url} alt={title} title={title} />
            <div className="book-info">
                <h4>{title}</h4>
                <p><span>&#8377;</span> {price}  <button onClick={handleAddToCart} className="buy-button">Add to Cart</button></p>
            </div>
        </div>
    )
}

export default React.memo(Book)
