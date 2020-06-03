import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Item } from '../../store/types/itemType';
import { RootState } from '../../store/types/rootStoreType';
import { getItems } from '../../store/actions/itemsActions';
import Book from '../Book/Book';

type Props = {};

const ListView: React.FC<Props> = () => {

    const initialState: Item[] = [];
    const totalBooks = useSelector((state: RootState) => state.items.items);

    const dispatch = useDispatch();
    const [books, setbooks] = useState(initialState);
   

    useEffect(() => {
        if (!totalBooks.length) {
            dispatch(getItems());
        }
    }, [])

    useEffect(() => {
        if (totalBooks.length) {
            setbooks(totalBooks);
        }
    }, [totalBooks])

    return (
        <Fragment>
            <section className="books-grid">
                {
                    books.length && books.map((book: Item) =>
                        <Book key={book.bib_key} {...book}></Book>
                    )
                }            
            </section>
        </Fragment>
    )
}

export default ListView
