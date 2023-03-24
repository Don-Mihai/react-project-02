import React from 'react';
import { useState, useEffect } from "react";
import "./Orders.scss";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter/counter';
import { AppDispatch, RootState } from '../../redux/store';
import Order from '../Order/Order';
import { edit, fetch, remove } from '../../redux/order/order';
import { IOrder, TCreateOrder } from '../../redux/order/types';

function Orders() {
  const [search, setSearch] = useState<string>('');
  const [orders, setOrders] = useState<IOrder[]>([]);

  const count = useSelector((state: RootState) => state.counter.value)

  const dispatch = useDispatch<AppDispatch>()

  const fetchOrders = () => {
    // READ - ЭЛЕМЕНТ CRUD системы
    dispatch(fetch()).then((data) => setOrders(data.payload))
  }

  useEffect(() => {
    fetchOrders()
  }, [])


  const handleDelete = async (id: number) => {
    const newOrders: IOrder[] = orders.filter(order => {
        if (order.id === id) {
            return false;
        } else {
            return true;
        }
    });

    setOrders(newOrders);

    // Delete из CRUD СИСТЕМЫ
    dispatch(remove(id))
};

const handleEdit = async (payload: IOrder) => {

  // todo: вынести валидацию в отдельную функцию. на входе она должна принимать объект значений, если валидацию не проходит то должна появится всплывашка [3]
  // валидация на заполнение полей
  if (!payload?.describe?.length || !payload?.name?.length) {
    return;
  }
  
  // Update из CRUD СИСТЕМЫ
  await dispatch(edit(payload))
  fetchOrders()
};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const filterOrders = (object: IOrder, search: string) => {
    const name = object?.name?.toLowerCase();
    const describe = object?.describe?.toLowerCase();
    return (name && name.includes(search)) || (describe && describe.includes(search));
  };

  return (
      <div>
          <h2>
              Заказы ({orders?.length})<button onClick={handleIncrement}>+_+</button>
              {count}
              <button onClick={handleDecrement}>-</button>
          </h2>
          {/* todo: подключить из materialUi searchField [1] */}
          {/* todo: скрывать поиск когда нет заказов [1] */}
          <input onChange={handleChange} value={search} placeholder="Поиск..." />
          {/* todo: когда нет заказов отобразить красивую надпись или картинку с инфомрацией о том что нет созданных заказов [2] */}
          {orders
              ?.filter(object => filterOrders(object, search))
              .map((object, index) => (
                  <Order onDelete={handleDelete} onEdit={handleEdit} object={object} index={index} />
              ))}
      </div>
  );
}

export default Orders;
