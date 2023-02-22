import { useState } from "react";
import Order from "../Order/Order"
import "./Orders.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Orders({ orders, onDelete, children }) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Заказы ({orders?.length})</h2>
      {children}

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
                onClick={() => onDelete(object.id)}
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
