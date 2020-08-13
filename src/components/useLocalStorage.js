import {useState} from 'react';

export const useLocalStorage = () => {
const [bookCart, setBookCart] = useState(() => {
    if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    return []
});

let newArray = [];
const addBook = book => {
    if (!localStorage.getItem('cart')) {
        newArray.push(book);
        localStorage.setItem('cart', JSON.stringify(newArray));
        setBookCart(JSON.parse(localStorage.getItem('cart')));
    }
    else {
        newArray = JSON.parse(localStorage.getItem('cart'));
        newArray.push(book);
        localStorage.setItem('cart', JSON.stringify(newArray));
        setBookCart(JSON.parse(localStorage.getItem('cart')))
    }
}

const removeBook = id => {
    newArray = JSON.parse(localStorage.getItem('cart'));
    console.log(newArray)
    localStorage.setItem('cart', JSON.stringify(newArray.filter(item => item.id !== id)));
    setBookCart(JSON.parse(localStorage.getItem('cart')));
}

return [bookCart, addBook, removeBook]
}