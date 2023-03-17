import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// todo: описать интерфейс для пропсов [1]

const Order = ({ object, index }: any) => {

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
                {/* <img></img> */}
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
};

export default Order;
