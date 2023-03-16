import React from 'react';
import { useState, useEffect } from "react";
import "./Orders.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { IOrder } from '../CreateOrder/CreateOrder';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter/counter';
import { RootState } from '../../redux/store';

function Orders() {
  const [search, setSearch] = useState<string>('');
  const [orders, setOrders] = useState<IOrder[]>([]);

  const count = useSelector((state: RootState) => state.counter.value)

  const dispatch = useDispatch()

  // @ts-ignore
  // useEffect(async () => {
  //   const data: IOrder[] = await (await axios.get('http://localhost:3001/posts')).data
  //   setOrders(data)
  // }, [])

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
            <div
              className="order-item"
              key={index}
              style={{ border: "1px solid red" }}
            >
              <div>
                <div>{object?.name}</div>
                <div>{object?.describe}</div>
              </div>
              <div className="order-item__details">
                <p>Отклики</p>
                <p>Просмотры</p>
                <p>... дней назад</p>
              </div>
              <div className="order-item__price">
                <div>Договорная</div>
                <img></img>
              </div>


              <IconButton
                onClick={() => console.log('del')}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          );
        })}
    </div>
  );
}

export default Orders;
