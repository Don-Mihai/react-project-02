import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { TCreateUser } from '../../redux/user/types';
import { registration } from '../../redux/user/user';
import './Registration.scss';

const Registration = () => {
    const [formValues, setFormValues] = useState<TCreateUser>({ login: '', password: '', surname: '', name: '' });
    const [activeStep, setActiveStep] = useState(1);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    // todo: очистить поля после регистрации [1.5]
    const handleSubmit = () => {
        const payload: TCreateUser = {
            login: formValues.login,
            password: formValues.password,
            name: formValues.name,
            surname: formValues.surname,
        };

        navigate('/');
        dispatch(registration(payload)).then(data => localStorage.setItem('id', data.payload.id));
    };

    return (
        <div className="registration">
            <div className="registration__top">
                Уже зарегистрированы?
                <Link to={'/sign-in'}>Войдите</Link>
            </div>

            <div className="registration__container">
                {activeStep === 1 && (
                    <>
                        <h2 className="registration__title">Данные для авторизации</h2>
                        <div className="registration__inputs">
                            <TextField value={formValues.login} onChange={handleChange} name={'login'} label="Логин" variant="outlined" fullWidth />
                            <TextField value={formValues.password} onChange={handleChange} name={'password'} label="Пароль" variant="outlined" fullWidth />
                        </div>
                        <Button onClick={() => setActiveStep(2)} variant="outlined">
                            Далее
                        </Button>
                    </>
                )}

                {activeStep === 2 && (
                    <>
                        <h2 className="registration__title">Данные пользователя</h2>
                        <div className="registration__inputs">
                            <TextField value={formValues.name} onChange={handleChange} name={'name'} label="Имя" variant="outlined" fullWidth />
                            <TextField value={formValues.surname} onChange={handleChange} name={'surname'} label="Фамилия" variant="outlined" fullWidth />
                        </div>
                        <Button onClick={handleSubmit} variant="outlined">
                            Регистрация
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Registration;
