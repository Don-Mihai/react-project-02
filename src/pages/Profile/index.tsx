import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { IUser, ROLES, TCreateUser } from '../../redux/user/types';
import { edit, getUserById, registration } from '../../redux/user/user';
import './Profile.scss';
import Header from '../../components/Header/Header';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { showNotification } from '../../utils/utils';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);
    const [formValues, setFormValues] = useState<TCreateUser>({ name: '', surname: '', userDescribe: '', skills: [], activeRole: '' });
    const [createSkill, setCreateSkill] = useState({ skill: '' });
    const [open, setOpen] = useState(false);
    const [showInput, setShowInput] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(null)).then(data => {
            setFormValues({
                name: data.payload.name,
                surname: data.payload.surname,
                userDescribe: data.payload.userDescribe,
                skills: data.payload.skills,
                activeRole: data.payload.activeRole,
            });
        });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveImage = async () => {
        const payload: IUser = {
            ...user,
            ...formValues,
        };

        await dispatch(edit(payload));

        handleClose();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleChangeSkill = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreateSkill({ ...createSkill, [event.target.name]: event.target.value });
    };

    const handleEdit = async () => {
        const payload: IUser = {
            ...user,
            ...formValues,
        };

        if (!formValues.name?.length || !formValues?.surname?.length) {
            showNotification('Пацаны к успеху шли', 'warning');
            return;
        }

        await dispatch(edit(payload));
    };

    const addChips = () => {
        setShowInput(!showInput);
    };

    const handleSaveChips = async (event: any) => {
        if (event.code === 'Enter') {
            const payload: IUser = {
                ...user,
                skills: user?.skills ? [...user?.skills, createSkill.skill] : [createSkill.skill],
            };

            await dispatch(edit(payload));

            setCreateSkill({ skill: '' });
        }
    };

    const handleDeleteChips = async (index: number) => {
        const payload: IUser = {
            ...user,
            skills: user?.skills?.filter((skill, indexSkill) => index !== indexSkill),
        };

        await dispatch(edit(payload));
    };

    console.log(formValues);

    return (
        <>
            <Header></Header>
            <div className={'profile'}>
                <div className={'profile__top-container'} style={{ backgroundImage: `url(${user.themeUrl})` }}>
                    <div onClick={handleClickOpen} className={'profile__avatar-container'}>
                        <Avatar sx={{ bgcolor: deepOrange[500], height: '100px', width: '100px' }} alt="" src={user.imgUrl}>
                            {/* todo: отобразить инициалы пользователя */}M
                        </Avatar>
                    </div>
                </div>

                <div className={'profile__content'}>
                    <TextField value={formValues.name} onChange={handleChange} name="name" label="Имя*" variant="filled" fullWidth />
                    <TextField value={formValues.surname} onChange={handleChange} name="surname" label="Фамилия*" variant="filled" fullWidth />
                    <textarea value={formValues.userDescribe} onChange={handleChange} name="userDescribe" cols={30} rows={10} placeholder="Описание"></textarea>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Роль</FormLabel>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" value={formValues?.activeRole} name="activeRole" onChange={handleChange}>
                            <FormControlLabel value={ROLES.DEVELOPER} control={<Radio />} label="Фрилансер" />
                            <FormControlLabel value={ROLES.CUSTUMER} control={<Radio />} label="Заказчик" />
                        </RadioGroup>
                    </FormControl>

                    <label htmlFor="">
                        <h3 className="profile__subtitle">Ключевые навыки</h3>
                        <div className="profile__chips-container">
                            {user.skills?.map((skill, index) => (
                                <Chip key={skill + index} label={skill} variant="outlined" onDelete={() => handleDeleteChips(index)} />
                            ))}
                            <div onClick={addChips} className="header__block_button">
                                +
                            </div>
                            {showInput && <Input value={createSkill.skill} onKeyUp={handleSaveChips} onChange={handleChangeSkill} name="skill" autoFocus />}
                        </div>
                    </label>
                </div>

                <div className={'profile__footer'}>
                    <Button variant="contained">Отменить</Button>
                    <Button onClick={handleEdit} variant="contained">
                        Сохранить
                    </Button>
                </div>

                {/* todo: сделать загрузку фотографие при перетаскивании */}
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">Редактирование аватарки</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">Для изменения изображения вставьте ссылку на изображение!</DialogContentText>
                        <br />
                        <TextField value={formValues.imgUrl} onChange={handleChange} name="imgUrl" label="Ссылка на изображение" variant="outlined" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отменить</Button>
                        <Button variant="contained" onClick={saveImage} autoFocus>
                            Сохранить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default Profile;
