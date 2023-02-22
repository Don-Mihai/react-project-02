import { useState } from "react";
import './Orders.scss'
import Order from '../Order/Order';



function Orders({orders, onDelete, children}) {
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <h2>Заказы ({orders?.length})</h2>

            <input onChange={handleChange} value={search} placeholder="Поиск..." />
            {orders
                ?.filter(object => {
                    // поиск по заказам
                    if (object?.name.toUpperCase().includes(search.toUpperCase()) || object?.describe.toUpperCase().includes(search.toUpperCase())) {
                        return true;
                    } else return false;
                })
                .map((object) => {
                    // todo: отдельынй компонент заказов
                    return (
                        <Order key={object.id} object={object} onDelete={onDelete} />
                        // Order({index: index})
                    );
                })}
        </div>
    );
}

export default Orders