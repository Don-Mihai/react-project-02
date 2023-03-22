import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import { TCreateOrder } from '../../redux/order/types';

// todo: описать интерфейс для пропсов [1]

const Order = ({ object, index, onDelete, onEdit}: any) => {
  const [formValues, setFormValues] = useState<TCreateOrder>({ name: object.name, describe: object.describe });
  const [editMode, setEditMode] = useState<boolean>(false)


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // взять данные инпута
    setFormValues({ ...formValues, name: event.target.value });
  };

  const handleChangeSecondary = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // взять данные инпута
    setFormValues({ ...formValues, describe: event.target.value });
  };

  const onClickSave = () => {
    onEdit(formValues)
    setEditMode(false)
  }

    return (
        <div className="order-item" key={object.id} style={{ border: '1px solid red' }}>
            <div>
                {editMode ? <input type="text" onChange={handleChange} value={formValues?.name} /> : <div>{object?.name}</div>}
                <br />
                {editMode ? <textarea name="describe" onChange={handleChangeSecondary} value={formValues?.describe}></textarea> : <div>{object?.describe}</div>}
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

            <IconButton onClick={() => setEditMode(!editMode)} aria-label="delete" size="small">
                <EditIcon fontSize="small" />
            </IconButton>

            <IconButton onClick={onClickSave} aria-label="delete" size="small">
                <SaveIcon fontSize="small" />
            </IconButton>

            <IconButton onClick={() => onDelete(object.id)} aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
};

export default Order;
