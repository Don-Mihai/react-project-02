import { useState } from "react";
import Orders from "../Orders/Orders";
import './CreateOrder.scss';

function CreateOrder () {
    const [formValues, setFormValues] = useState({})
    const [orders, setOrders] = useState([])


    const  handleDelete = (id) => {

        // создать новый список, где не будет заказа по котормоу кликнули
        const newOrders = orders.filter((order) => {
            if(order.id === id) {
                return false
            } else {
                return true
            }
        })

        setOrders(newOrders)
    }

    const handleChange = (event) => {
        // взять данные инпута
        setFormValues({...formValues, name: event.target.value})
    }

    const handleChangeSecondary = (event) => {
        // взять данные инпута
        setFormValues({...formValues, describe: event.target.value})
    }

    const clearInput = () => {
        setFormValues({
            name: '',
            describe: '',
        })
    }

    const placeOrder = () => {
        const newOrder = {
            id: Math.random(),
            name: formValues.name,
            describe: formValues.describe
        }

        // валидация на заполнение полей
        if(!formValues?.describe?.length || !formValues?.name?.length) {
            return;
        }

        // вызывает баги
        // setOrders([...orders, newOrder])

        setOrders(prev => {
            return [...prev, newOrder]
        })

        clearInput()
    }

    return (
        <div className="order">
            <h1>Фриланс Биржа</h1>
            <input name="name" className="order__input-name" onChange={handleChange} value={formValues?.name} />

            <textarea name="describe" onChange={handleChangeSecondary} value={formValues?.describe} ></textarea>

            <div>
                <button className={'order__button'} onClick={placeOrder}>Создать заказ</button>
            </div>


            <Orders orders={orders} onDelete={handleDelete}><p>Мой текст</p></Orders>
        </div>
    )
}

export default CreateOrder