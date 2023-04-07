import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { IUser, TCreateUser } from '../../redux/user/types';
import { edit, getUserById, registration } from '../../redux/user/user';
import './ProfileOrders.scss';
import Header from '../../components/Header/Header';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Order from '../../components/Order/Order';
import { fetchOrdersByUser } from '../../redux/order/order';

const ProfileOrders = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);
    const myOrders = useSelector((state: RootState) => state.order.myOrders);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(Number(localStorage.getItem('id'))));
        dispatch(fetchOrdersByUser(Number(localStorage.getItem('id'))));
    }, []);

    return (
        <>
            <Header></Header>
            <div className={'profile-orders'}>
                <div className={'profile-orders__content'}>
                    {myOrders.map((object, index) => (
                        <Order object={object} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProfileOrders;
