import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { IAuthUser } from '../../redux/user/types';
import { auth } from '../../redux/user/user';
import './Authorization.scss';

const Authorization = () => {
    const [formValues, setFormValues] = useState<IAuthUser>({ login: '', password: '' });

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleSubmit = async () => {
        const payload: IAuthUser = {
            login: formValues.login,
            password: formValues.password,
        };

        const data = await dispatch(auth(payload));

        if (data.payload.token) {
            navigate('/my/profile');

            localStorage.setItem('id', data.payload.token);
        }
    };

    return (
        <div className="authorization">
            <div className="authorization__top">
                Ещё нет аккаунта?
                <Link to={'/sign-up'}>Зарегистрируйтесь</Link>
            </div>

            <div className="authorization__container">
                <div className="authorization__inputs">
                    <TextField onChange={handleChange} value={formValues.login} name={'login'} label="Логин" variant="outlined" fullWidth />
                    <TextField onChange={handleChange} value={formValues.password} name={'password'} label="Пароль" variant="outlined" fullWidth />
                </div>

                <Button onClick={handleSubmit} variant="contained" fullWidth>
                    Войти
                </Button>
            </div>
        </div>
    );
};

export default Authorization;
