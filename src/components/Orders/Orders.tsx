import React from 'react';
import { useState, useEffect } from 'react';
import './Orders.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Order from '../Order/Order';
import { edit, fetch, remove } from '../../redux/order/order';
import { IOrder, TCreateOrder, TYPE_FILTERS } from '../../redux/order/types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Skeleton from './Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import isEqual from 'lodash/isEqual';
import { getArrFromObjByTrue } from '../../utils/object';

interface Props {
    className?: string;
}

function Orders({ className }: Props) {
    const [search, setSearch] = useState<string>('');
    const [orders, setOrders] = useState<IOrder[]>([]);
    const filters = useSelector((state: RootState) => state.order.filterOrders);

    const isLoadingOrders = useSelector((state: RootState) => state.order.isLoadingFetch);

    const dispatch = useDispatch<AppDispatch>();

    const fetchOrders = () => {
        // READ - ЭЛЕМЕНТ CRUD системы
        dispatch(fetch()).then(data => setOrders(data.payload));
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleDelete = async (id: string) => {
        const newOrders: IOrder[] = orders.filter(order => {
            if (order._id === id) {
                return false;
            } else {
                return true;
            }
        });

        setOrders(newOrders);

        console.log(orders, id);
        // Delete из CRUD СИСТЕМЫ
        dispatch(remove(id));
    };

    const handleEdit = async (payload: IOrder) => {
        // todo: вынести валидацию в отдельную функцию. на входе она должна принимать объект значений, если валидацию не проходит то должна появится всплывашка [3]
        // валидация на заполнение полей
        if (!payload?.describe?.length || !payload?.name?.length) {
            return;
        }

        // Update из CRUD СИСТЕМЫ
        await dispatch(edit(payload));
        fetchOrders();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const filterOrders = (object: IOrder, search: string) => {
        const name = object?.name?.toLowerCase();
        const describe = object?.describe?.toLowerCase();
        return (name && name.includes(search)) || (describe && describe.includes(search));
    };

    return (
        <div className={`orders ${className}`}>
            <h2>Заказы</h2>
            {/* todo: подключить из materialUi searchField [1] */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    className="orders__search_input"
                    onChange={handleChange}
                    value={search}
                    id="standard-basic"
                    label="Поиск..."
                    variant="standard"
                    color="warning"
                />
            </Box>
            {/* todo: скрывать поиск когда нет заказов [1] */}
            {/* <input onChange={handleChange} value={search} placeholder="Поиск..." /> */}
            {/* todo: когда нет заказов отобразить красивую надпись или картинку с инфомрацией о том что нет созданных заказов [2] */}
            {isLoadingOrders ? (
                <div className={'progress'}>
                    <CircularProgress size={70} />
                </div>
            ) : (
                orders
                    ?.filter(order => getArrFromObjByTrue(filters).includes(order.filter) || getArrFromObjByTrue(filters).includes(TYPE_FILTERS.All))
                    ?.filter(object => filterOrders(object, search))
                    .map(object => <Order onDelete={handleDelete} onEdit={handleEdit} object={object} />)
            )}
        </div>
    );
}

export default Orders;
