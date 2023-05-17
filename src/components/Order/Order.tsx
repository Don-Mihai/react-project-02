import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PaymentsIcon from '@mui/icons-material/Payments';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { AppDispatch, RootState } from '../../redux/store';
import { edit, getUserById } from '../../redux/user/user';
import { ROLES } from '../../redux/user/types';
import { create } from '../../redux/bookmark/bookmark';
import { TCreateBookmark } from '../../redux/bookmark/types';
import './Order.scss';
import { FormValuesOrder, IOrder } from '../../redux/order/types';

type Props = {
    object: any;
    onDelete: (id: string) => void;
    onEdit: (payload: IOrder) => Promise<void>;
};

const Order: React.FC<Props> = ({ object, onDelete, onEdit }) => {
    const [formValues, setFormValues] = useState<FormValuesOrder>({
        name: object.name,
        describe: object.describe,
        filter: object.filter,
    });
    const [editMode, setEditMode] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openOptions = Boolean(anchorEl);

    const user = useSelector((state: RootState) => state.user.currentUser);
    const isMyOrder = user.id === object.userId;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(Number(localStorage.getItem('id')))).then(data => {
            // setFormValues({ name: data.payload.name});
        });
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onClickEdit = () => {
        setEditMode(!editMode);
        handleClose();
    };

    const onClickDelete = () => {
        onDelete(object._id);
        handleClose();
    };

    const onClickAddBookmarks = () => {
        const payload: TCreateBookmark = {
            userId: user.id,
            orderId: object.id,
        };
        dispatch(create(payload));
    };

    const handleChange = (event: React.ChangeEvent<any>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const onClickSave = () => {
        onEdit({ ...formValues, _id: object._id, userId: object.userId });
        setEditMode(false);
    };
    return (
        <div className="order-item" key={object.id}>
            <div className="order-item__content">
                {editMode ? (
                    <input type="text" name="name" onChange={handleChange} value={formValues?.name} />
                ) : (
                    <div className="order-item__content__title">
                        {object?.name} {object.userId}
                    </div>
                )}
                <br />
                {editMode ? (
                    <textarea className="order-item__content__description" name="describe" onChange={handleChange} value={formValues?.describe}></textarea>
                ) : (
                    <div>{object?.describe}</div>
                )}
            </div>

            {editMode && (
                <IconButton onClick={onClickSave} aria-label="delete" size="small" sx={{ position: 'absolute', top: '0', right: '20px' }}>
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
            {openOptions && (
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
                        },
                    }}
                >
                    {isMyOrder && (
                        <>
                            <MenuItem key={'1'} onClick={onClickEdit}>
                                <EditIcon fontSize="small" />
                            </MenuItem>
                            <MenuItem key={'2'} onClick={onClickDelete}>
                                <DeleteIcon fontSize="small" />
                            </MenuItem>
                        </>
                    )}

                    {!isMyOrder && user.activeRole === ROLES.DEVELOPER && (
                        <MenuItem key={'3'} onClick={onClickAddBookmarks}>
                            Добавить в закладки
                        </MenuItem>
                    )}
                </Menu>
            )}
        </div>
    );
};

export default Order;
