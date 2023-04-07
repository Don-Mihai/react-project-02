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

interface FormValues {
    dev: boolean;
    test: boolean;
    design: boolean;
}

const Filters = () => {
    const [formValues, setFormValues] = useState<FormValues>({ dev: false, test: false, design: false });

    // const dispatch = useDispatch<AppDispatch>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.checked });
    };

    const resetCheboxes = () => {};

    const handleSubmit = () => {
        // const payload: TCreateUser = {
        //     login: formValues.login,
        //     password: formValues.password
        // }

        // dispatch(registration(payload))

        console.log(formValues);
    };

    return (
        <div className="filters">
            <h2 className="filters__title">Сфера деятельности</h2>

            <div className="filters__chekboxes">
                <FormControlLabel control={<Checkbox name="dev" onChange={handleChange} />} label="Разработка" />
                <FormControlLabel control={<Checkbox name="test" onChange={handleChange} />} label="Тестирование" />
                <FormControlLabel control={<Checkbox name="design" onChange={handleChange} />} label="Дизайн" />
            </div>

            <div className="filters__footer">
                <Button variant="contained" onClick={handleSubmit}>
                    Сохранить
                </Button>
                <Button variant="outlined">Очистить</Button>
            </div>
        </div>
    );
};

export default Filters;
