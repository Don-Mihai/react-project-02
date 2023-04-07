import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './CreateOrder.scss';
import axios from 'axios';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../../redux/order/order';
import { FormValuesOrder, IOrder, TCreateOrder } from '../../redux/order/types';
import { getUserById } from '../../redux/user/user';

function CreateOrder() {
    const [formValues, setFormValues] = useState<FormValuesOrder>({ name: '', describe: '' });

    const user = useSelector((state: RootState) => state.user.currentUser);

    const inputRef: any = useRef(null);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(Number(localStorage.getItem('id'))));
    }, []);

    // todo: перенести функцию в Orders и передать в качестве пропса в компонент Order [2]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // взять данные инпута
        setFormValues({ ...formValues, name: event.target.value });
    };

    const handleChangeSecondary = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        // взять данные инпута
        setFormValues({ ...formValues, describe: event.target.value });
    };

    const clearInput = () => {
        setFormValues({
            name: '',
            describe: '',
        });
    };

    // todo: сделать всплывающее уведомление при создании заказа (по аналогии уже сделанного на JS) [3]
    const placeOrder = () => {
        const newOrder: TCreateOrder = {
            userId: user.id,
            name: formValues.name,
            describe: formValues.describe,
        };

        // console.log

        // todo: вынести валидацию в отдельную функцию. на входе она должна принимать объект значений, если валидацию не проходит то должна появится всплывашка [3]
        // валидация на заполнение полей
        if (!formValues?.describe?.length || !formValues?.name?.length) {
            return;
        }

        dispatch(create(newOrder));

        clearInput();
    };

    return (
        <div className="order">
            <h1>Фриланс Биржа</h1>
            {/* todo: подключить из materialUi инпут для названия заказа [1] */}
            <input autoFocus ref={inputRef} name="name" className="order__input-name" onChange={handleChange} value={formValues?.name} />

            {/* todo: подключить из materialUi tesxtarea для описания заказа [1] */}
            <textarea name="describe" onChange={handleChangeSecondary} value={formValues?.describe}></textarea>

            {/* todo: подключить из materialUi autocomplete/grouped для сферы деятельности [2] */}
            {/* todo: подключить из materialUi textfield для ключевых навыков [1] */}
            <div>
                <button className={'order__button'} onClick={placeOrder}>
                    Создать заказ
                </button>
            </div>
        </div>
    );
}

export default CreateOrder;
