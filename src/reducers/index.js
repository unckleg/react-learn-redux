import { combineReducers } from 'redux';
import BooksReducer from './redurcer_books'
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
