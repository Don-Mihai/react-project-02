import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { TCreateUser } from '../../redux/user/types';
import { registration } from '../../redux/user/user';
import './Registration.scss'

const Registration = () => {
    const [formValues, setFormValues] = useState<TCreateUser>({login: '', password: ''})

    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    // todo: очистить поля после регистрации [1.5]
    const handleSubmit = () => {
        const payload: TCreateUser = {
            login: formValues.login,
            password: formValues.password
        }

        dispatch(registration(payload))
    }

    return (
        
            <div className="registration">
                <div className="registration__top">
                    Уже зарегистрированы?
                    <Link to={'/sign-in'}>Войдите</Link>
                </div>


                <div className="registration__container">

                    <div className='registration__inputs'>
                        <TextField value={formValues.login} onChange={handleChange} name={'login'} label="Логин" variant="outlined" fullWidth />
                        <TextField value={formValues.password} onChange={handleChange} name={'password'} label="Пароль" variant="outlined" fullWidth />
                    </div>
                    

                    <Button onClick={handleSubmit} variant="contained">Регистрация</Button>
                </div>

                
            </div>
        
    );
}

export default Registration;