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
import { FilterOrders, TYPE_FILTERS, default_filter_obj } from '../../redux/order/types';
import { setFilter } from '../../redux/order/order';

const Filters = () => {
    const [formValues, setFormValues] = useState<FilterOrders>(default_filter_obj);

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

    console.log(formValues);

    return (
        <div className="filters">
            <h2 className="filters__title">Сфера деятельности</h2>

            <div className="filters__chekboxes">
                <FormControlLabel control={<Checkbox name={TYPE_FILTERS.All} onChange={handleChange} checked={formValues[TYPE_FILTERS.All]} />} label="Все" />
                <FormControlLabel
                    control={<Checkbox name={TYPE_FILTERS.DEV} onChange={handleChange} checked={formValues[TYPE_FILTERS.DEV]} />}
                    label="Разработка"
                />
                <FormControlLabel
                    control={<Checkbox name={TYPE_FILTERS.TEST} onChange={handleChange} checked={formValues[TYPE_FILTERS.TEST]} />}
                    label="Тестирование"
                />
                <FormControlLabel
                    control={<Checkbox name={TYPE_FILTERS.DESIGN} onChange={handleChange} checked={formValues[TYPE_FILTERS.DESIGN]} />}
                    label="Дизайн"
                />
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
