import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { TCreateUser } from '../../redux/user/types';
import { registration } from '../../redux/user/user';
import './Filters.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { forIn } from 'lodash';
import { FilterOrders } from '../../redux/order/types';
import { setFilter } from '../../redux/order/order';

const Filters = () => {
    const [formValues, setFormValues] = useState<FilterOrders>({ dev: true, test: false, design: false });

    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.checked });
    };

    const resetCheboxes = () => {
        const obj = { ...formValues };

        for (let key in obj) {
            obj[key as keyof FilterOrders] = false;
        }

        setFormValues(obj);
    };

    const handleSubmit = () => {
        dispatch(setFilter(formValues));
    };

    return (
        <div className="filters">
            <h2 className="filters__title">Сфера деятельности</h2>

            <div className="filters__chekboxes">
                <FormControlLabel control={<Checkbox name="dev" onChange={handleChange} checked={formValues.dev} />} label="Разработка" />
                <FormControlLabel control={<Checkbox name="test" onChange={handleChange} checked={formValues.test} />} label="Тестирование" />
                <FormControlLabel control={<Checkbox name="design" onChange={handleChange} checked={formValues.design} />} label="Дизайн" />
            </div>

            <div className="filters__footer">
                <Button variant="contained" onClick={handleSubmit}>
                    Сохранить
                </Button>
                <Button variant="outlined" onClick={resetCheboxes}>
                    Очистить
                </Button>
            </div>
        </div>
    );
};

export default Filters;
