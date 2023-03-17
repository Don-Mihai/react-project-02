import React from 'react';
import { useState, useEffect } from "react";
import "./Orders.scss";
import { IOrder } from '../CreateOrder/CreateOrder';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter/counter';
import { AppDispatch, RootState } from '../../redux/store';
import Order from '../Order/Order';
import { fetch } from '../../redux/order/order';

function Orders() {
  const [search, setSearch] = useState<string>('');
  const [orders, setOrders] = useState<IOrder[]>([]);

  const count = useSelector((state: RootState) => state.counter.value)

  const dispatch = useDispatch<AppDispatch>()

  const fetchOrders = async () => {

    dispatch(fetch())
    // setOrders(orders)
    // return orders
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h2>Заказы ({orders?.length})
        <button onClick={handleIncrement}>+_+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </h2>
      {/* todo: подключить из materialUi searchField [1] */}
      <input onChange={handleChange} value={search} placeholder="Поиск..." />
      {orders
        ?.filter((object) => {
          // поиск по заказам
          if (
            object?.name.toUpperCase().includes(search.toUpperCase()) ||
            object?.describe.toUpperCase().includes(search.toUpperCase())
          ) {
            return true;
          } else return false;
        })
        .map((object, index) => {
          return (
            <Order object={object} index={index}></Order>
          );
        })}
    </div>
  );
}

export default Orders;
