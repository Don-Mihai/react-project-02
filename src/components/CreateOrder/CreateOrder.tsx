import React from 'react'
import { useEffect, useRef, useState } from "react";
import Orders from "../Orders/Orders";
import "./CreateOrder.scss";
import axios from 'axios';


export interface IOrder {
  id: number;
  name: string;
  describe: string;
}

type TCreateOrder =  Omit<IOrder, 'id'>

// дженерик <IOrder[]>
// interface - для описания типа объекта
// Omit - позволяет исключать типы или свойства из другого типа


function CreateOrder() {
  const [formValues, setFormValues] = useState<TCreateOrder>({ name: '', describe: '' });
  const [orders, setOrders] = useState<IOrder[]>([]);

  const inputRef: any= useRef(null)

  const handleDelete = (id: number) => {
      const newOrders: IOrder[] = orders.filter(order => {
          if (order.id === id) {
              return false;
          } else {
              return true;
          }
      });
      setOrders(newOrders);
  };

  useEffect(() => {
    inputRef.current.focus()
  }, [])

// @ts-ignore
  useEffect(async () => {
    const data = await (await axios.get('http://localhost:3001/posts')).data
    setOrders(data)
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // взять данные инпута
    setFormValues({ ...formValues, name: event.target.value });
  };

  const handleChangeSecondary = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // взять данные инпута
    setFormValues({ ...formValues, describe: event.target.value });
  };

  const clearInput = () => {
    setFormValues({
      name: "",
      describe: "",
    });
  };

  const placeOrder = () => {
    const newOrder: TCreateOrder = {
      name: formValues.name,
      describe: formValues.describe,
    };

    // валидация на заполнение полей
    if (!formValues?.describe?.length || !formValues?.name?.length) {
      return;
    }

    axios.post('http://localhost:3001/posts', newOrder).then(data => {
        setOrders(prev => {
            return [...prev, data.data];
        });
    });

    clearInput();
  };

  return (
    <div className="order">
      <h1>Фриланс Биржа</h1>
      <input
        // autoFocus
        ref={inputRef}
        name="name"
        className="order__input-name"
        onChange={handleChange}
        value={formValues?.name}
      />

      <textarea
        name="describe"
        onChange={handleChangeSecondary}
        value={formValues?.describe}
      ></textarea>

      <div>
        <button className={"order__button"} onClick={placeOrder}>
          Создать заказ
        </button>
      </div>
      <Orders orders={orders} onDelete={handleDelete}/>
    </div>
  );
}

export default CreateOrder;
