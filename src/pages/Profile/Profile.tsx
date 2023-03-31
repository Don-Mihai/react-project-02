import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { IUser, TCreateUser } from '../../redux/user/types';
import { edit, registration } from '../../redux/user/user';
import './Profile.scss';
import Header from '../../components/Header/Header';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);
    const [formValues, setFormValues] = useState<TCreateUser>({name: user.name, surname: user.surname})

    const dispatch = useDispatch<AppDispatch>()
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    const handleEdit = async () => {

        const payload: IUser = {
            ...user,
            ...formValues,
        }
        
        if (!formValues.name?.length || !formValues?.surname?.length) {
            return;
        }

        await dispatch(edit(payload));
    };
    return (
        <>
            <Header></Header>
            <div className={'profile'}>
                <div className={'profile__top-container'}>
                    <div className={'profile__avatar-container'}>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500], height: '100px', width: '100px' }}
                            alt="Remy Sharp"
                            src="https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg"
                        >
                            M
                        </Avatar>
                    </div>
                </div>

                <div className={'profile__content'}>
                    <TextField value={formValues.name} onChange={handleChange} name='name' label="Имя*" variant="filled" fullWidth />
                    <TextField value={formValues.surname} onChange={handleChange} name='surname'  label="Фамилия*" variant="filled" fullWidth />
                </div>

                <div className={'profile__footer'}>
                    <Button variant="contained" >Отменить</Button>
                    <Button onClick={handleEdit} variant="contained">Сохранить</Button>
                </div>
            </div>
        </>
    );
        
   
};

export default Profile;
