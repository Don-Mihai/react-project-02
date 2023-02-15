import { useState } from "react";
import Orders from "../Orders/Orders";
import './CreateOrder.css';

function CreateOrder () {
    const [formValues, setFormValues] = useState({})
    const [orders, setOrders] = useState([])


    const  handleDelete = () => {
        const arr = [{}, {}, {}]
    }

    const handleChange = (event) => {
        // взять данные инпута
        setFormValues({...formValues, name: event.target.value})

        console.log(formValues)
    }

    const handleChangeSecondary = (event) => {
        // взять данные инпута
        setFormValues({...formValues, describe: event.target.value})
        console.log(formValues)
    }

    const clearInput = () => {
        setFormValues({
            name: '',
            describe: '',
        })
    }

    const placeOrder = () => {
        const newOrder = {
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
            <input name="name" className="order__input-name" onChange={handleChange} value={formValues?.name} />

            <textarea name="describe" onChange={handleChangeSecondary} value={formValues?.describe} ></textarea>

            <div>
                <button onClick={placeOrder}>Создать заказ</button>
            </div>


            <Orders orders={orders} onDelete={handleDelete}><p>Мой текст</p></Orders>
        </div>
    )
}

export default CreateOrder