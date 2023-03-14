import React from 'react';
import { useState, useEffect } from "react";
import "./Orders.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { IOrder } from '../CreateOrder/CreateOrder';
import axios from 'axios';




function Orders() {
  const [search, setSearch] = useState<string>('');
  const [orders, setOrders] = useState<IOrder[]>([]);

  // @ts-ignore
  useEffect(async () => {
    const data: IOrder[] = await (await axios.get('http://localhost:3001/posts')).data
    setOrders(data)
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Заказы ({orders?.length})</h2>

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
