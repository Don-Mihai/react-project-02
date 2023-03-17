import React from 'react'
import { useRef, useState } from "react";
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

  // todo: перенести функцию в Orders и передать в качестве пропса в компонент Order [2]
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


// todo: сделать всплывающее уведомление при создании заказа (по аналогии уже сделанного на JS) [3]
  const placeOrder = () => {
    const newOrder: TCreateOrder = {
      name: formValues.name,
      describe: formValues.describe,
    };

    // todo: вынести валидацию в отдельную функцию. на входе она должна принимать объект значений, если валидацию не проходит то должна появится всплывашка
    // валидация на заполнение полей
    if (!formValues?.describe?.length || !formValues?.name?.length) {
      return;
    }

    // todo: перенести получение постов в редакс [2]
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
      {/* todo: подключить из materialUi инпут для названия заказа [1] */}
      <input
        autoFocus
        ref={inputRef}
        name="name"
        className="order__input-name"
        onChange={handleChange}
        value={formValues?.name}
      />

      {/* todo: подключить из materialUi tesxtarea для описания заказа [1] */}
      <textarea
        name="describe"
        onChange={handleChangeSecondary}
        value={formValues?.describe}
      ></textarea>

{/* todo: подключить из materialUi autocomplete/grouped для сферы деятельности [2] */}
{/* todo: подключить из materialUi textfield для ключевых навыков [1] */}
      <div>
        <button className={"order__button"} onClick={placeOrder}>
          Создать заказ
        </button>
      </div>
    </div>
  );
}

export default CreateOrder;
