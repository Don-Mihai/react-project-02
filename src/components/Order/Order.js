import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Order = ({ object, onDelete}) => {

    return(
        
<div className="orders__item" style={{ border: '1px solid red' }}>
<div>
    <div>{object?.name}</div>
    <div>{object?.describe}</div>
</div>

<IconButton onClick={() => onDelete(object.id)} aria-label="delete" size="small">
    <DeleteIcon fontSize="small" />
</IconButton>
</div>
    )
}

export default Order;
