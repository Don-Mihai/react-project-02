import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Registration.scss'

const Registration = () => {

    return (
        
            <div className="registration">
                <div className="registration__top">
                    Уже зарегистрированы?
                    <Link to={'/sign-in'}>Войдите</Link>
                </div>


                <div className="registration__container">

                    <div className='registration__inputs'>
                        <TextField id="outlined-basic" label="Логин" variant="outlined" fullWidth />
                        <TextField id="outlined-basic" label="Пароль" variant="outlined" fullWidth />
                    </div>
                    

                    <Button variant="contained">Регистарция</Button>
                </div>

                
            </div>
        
    );
}

export default Registration;