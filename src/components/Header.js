import { useState } from "react"
import Post from './Post'

function Header () {
    const [quantity, setQuantity] = useState(0)

    const posts = [
        {name: 'item1', text: 'loremsadfasdfasdasdf', id: 123132345},
        {name: 'item2', text: 'loremsadfasdfasdasdf', id: 123132345},
        {name: 'item3', text: 'loremsadfasdfasdasdf', id: 123132345},
    ]

    const increment = () => {
        setQuantity((prev) => prev + 1)
    }

    const decrement = () => {
        setQuantity((prev) => prev - 1)
    }

    return (
        <div>
            <div className="header">Количество товаров: {posts.length}</div>

            {posts.map((object, index) => {
                return (
                    <Post object={object} key={index} ></Post>
                );
            })}

            <div>Счётчик: {quantity}</div>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
}

export default Header