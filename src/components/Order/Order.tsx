import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { FormValuesOrder } from '../../redux/order/types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import PaymentsIcon from '@mui/icons-material/Payments';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import React from 'react';
import './Order.scss';

// todo: описать интерфейс для пропсов [1]

const Order = ({ object, index, onDelete, onEdit }: any) => {
    const [formValues, setFormValues] = useState<FormValuesOrder>({
        name: object.name,
        describe: object.describe,
        filter: object.filter,
    });
    const [editMode, setEditMode] = useState<boolean>(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openOptions = Boolean(anchorEl);

    const onClickEdit = () => {
        setEditMode(!editMode);
        handleClose();
    };

    const onClickDelete = () => {
        onDelete(object.id);
        handleClose();
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // взять данные инпута
        setFormValues({ ...formValues, name: event.target.value });
    };

    const handleChangeSecondary = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        // взять данные инпута
        setFormValues({ ...formValues, describe: event.target.value });
    };

    const onClickSave = () => {
        onEdit({ ...formValues, id: object.id });
        setEditMode(false);
    };

    return (
        <div className="order-item" key={object.id} style={{ border: '1px solid black' }}>
            <div>
                {editMode ? (
                    <input type="text" onChange={handleChange} value={formValues?.name} />
                ) : (
                    <div>
                        {object?.name} {object.userId}
                    </div>
                )}
                <br />
                {editMode ? <textarea name="describe" onChange={handleChangeSecondary} value={formValues?.describe}></textarea> : <div>{object?.describe}</div>}
            </div>

            <div className="order-item__details">
                <p>
                    Отклики <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                </p>
                <p>
                    Просмотры<RemoveRedEyeIcon></RemoveRedEyeIcon>
                </p>
                <p>
                    Добавлено <AccessTimeIcon></AccessTimeIcon>
                </p>
            </div>
            <div className="order-item__price">
                <div>
                    Договорная<PaymentsIcon></PaymentsIcon>
                </div>

                {/* <img></img> */}
            </div>

            {editMode && (
                <IconButton onClick={onClickSave} aria-label="delete" size="small" sx={{ position: 'absolute', top: '15px', right: '20px' }}>
                    <SaveIcon fontSize="small" />
                </IconButton>
            )}

            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={openOptions ? 'long-menu' : undefined}
                aria-expanded={openOptions ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={openOptions}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        // width: '20ch',
                    },
                }}
            >
                <MenuItem key={'1'} onClick={onClickEdit}>
                    <EditIcon fontSize="small" />
                </MenuItem>
                <MenuItem key={'2'} onClick={onClickDelete}>
                    <DeleteIcon fontSize="small" />
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Order;
