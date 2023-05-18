import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './CreateOrder.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../../redux/order/order';
import { FormValuesOrder, TCreateOrder, TYPE_FILTERS } from '../../redux/order/types';
import { getUserById } from '../../redux/user/user';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreateOrder() {
    const [formValues, setFormValues] = useState<FormValuesOrder>({ name: '', describe: '', filter: '' });

    const user = useSelector((state: RootState) => state.user.currentUser);

    const inputRef: any = useRef(null);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(localStorage.getItem('id')));
    }, []);

    const handleChange = (event: React.ChangeEvent<any>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const clearInput = () => {
        setFormValues({
            name: '',
            describe: '',
            filter: '',
        });
    };

    // todo: сделать всплывающее уведомление при создании заказа (по аналогии уже сделанного на JS) [3]
    const placeOrder = () => {
        const newOrder: TCreateOrder = {
            userId: user.id,
            name: formValues.name,
            describe: formValues.describe,
            filter: formValues.filter,
        };

        // todo: вынести валидацию в отдельную функцию. на входе она должна принимать объект значений, если валидацию не проходит то должна появится всплывашка [3]
        // валидация на заполнение полей
        if (!formValues?.describe?.length || !formValues?.name?.length || !formValues?.filter?.length) {
            return;
        }

        dispatch(create(newOrder));

        clearInput();
    };
    return (
        <div className="order">
            <h1>Фриланс Биржа</h1>
            <TextField autoFocus inputRef={inputRef} name="name" label="Название заказа" onChange={handleChange} value={formValues.name} />
            <TextField name="describe" label="Описание заказа" onChange={handleChange} value={formValues.describe} />
            <FormControl className="order__radios">
                <FormLabel id="demo-radio-buttons-group-label">Сфера деятельности</FormLabel>
                <RadioGroup value={formValues.filter} name="filter" onChange={handleChange}>
                    <FormControlLabel value="dev" control={<Radio />} label="Разработка" />
                    <FormControlLabel value="test" control={<Radio />} label="Тестирование" />
                    <FormControlLabel value="design" control={<Radio />} label="Дизайн" />
                </RadioGroup>
            </FormControl>

            <Button className={'order__button'} onClick={placeOrder} variant="contained" color="primary">
                Создать заказ
            </Button>
        </div>
    );
}

export default CreateOrder;
