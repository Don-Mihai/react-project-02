import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './ChatModal.scss';
import { Message } from '..';
import UserCard from '../../UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { getUsers } from '../../../redux/user/user';
import { IUser } from '../../../redux/user/types';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
    open: boolean;
    handleClose: () => void;
    messages: Message[];
    handleSendMessage: () => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formValues: Partial<Message>;
    activeUser: IUser;
    handleClickUser: (user: IUser) => void;
}

export default function ChatModal({ open, handleClose, messages, handleSendMessage, handleChange, formValues, activeUser, handleClickUser }: Props) {
    const users = useSelector((state: RootState) => state.user.users);

    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Чат
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="component-chat-modal__wrap">
                    <div className="component-chat-modal__left">
                        {users.map(user => (
                            <UserCard onClick={() => handleClickUser(user)} user={user} />
                        ))}
                    </div>
                    <div className="component-chat-modal__right">
                        <h2>{activeUser.name}</h2>
                        <List sx={{ height: '100%', overflowY: 'scroll' }}>
                            {messages.map(message => {
                                return (
                                    <>
                                        <ListItem key={message.timestamp.toString()}>
                                            <ListItemText primary={message.content} secondary={message.timestamp.toString()} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                );
                            })}
                        </List>
                        <div className="component-chat-modal__send-form">
                            <TextField
                                onChange={handleChange}
                                value={formValues.content}
                                name="content"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <IconButton onClick={handleSendMessage} sx={{ position: 'absolute', right: '0' }}>
                                            <SendIcon sx={{ width: '35px', height: '35px' }} />
                                        </IconButton>
                                    ),
                                }}
                                variant="standard"
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
