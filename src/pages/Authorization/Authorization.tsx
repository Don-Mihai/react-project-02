import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Authorization.scss'

const Authorization = () => {

    return (
        <div className="registration">
            <div className="registration__top">
                Ещё нет аккаунта?
                <Link to={'/sign-up'}>Зарегистрируйтесь</Link>
            </div>

            <div className="registration__container">
                <div className="registration__inputs">
                    <TextField id="outlined-basic" label="Логин" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" fullWidth />
                </div>

                <Link to={'/'}>
                    <Button variant="contained" fullWidth>Войти</Button>
                </Link>
            </div>
        </div>
    );
}

export default Authorization;