import React, { useEffect, useState } from 'react';
import './Chat.scss';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';
import ChatModal from './ChatModal.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { IUser } from '../../redux/user/types';

export interface Message {
    sender: any;
    recipient: any;
    content: string;
    timestamp: Date;
}

function Chat() {
    const [open, setOpen] = React.useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [formValues, setFormValues] = useState<Partial<Message>>({ content: '' });
    const [activeUser, setActiveUser] = React.useState<IUser>({} as IUser);
    const user = useSelector((state: RootState) => state.user.currentUser);

    useEffect(() => {
        const interval = setInterval(() => {
            subcribe();
        }, 1000);

        return () => clearInterval(interval);
        // @ts-ignore
    }, [activeUser._id, user._id]);

    const subcribe = async () => {
        const data = await axios.post('/message/messages-user', {
            // @ts-ignore
            sender: user._id,
            // @ts-ignore
            recipient: activeUser._id,
        });

        console.log(user);
        setMessages(data.data);
    };

    const handleClickUser = (user: IUser) => {
        setActiveUser(user);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleSendMessage = () => {
        const payload: Partial<Message> = {
            content: formValues.content,
            // @ts-ignore
            sender: user._id,
            // @ts-ignore
            recipient: activeUser._id,
        };
        axios.post('/message/send', payload);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="component-chat">
            <IconButton onClick={handleClickOpen} color="primary">
                <ChatIcon />
            </IconButton>
            <ChatModal
                messages={messages}
                open={open}
                handleClickUser={handleClickUser}
                activeUser={activeUser}
                handleClose={handleClose}
                handleChange={handleChange}
                handleSendMessage={handleSendMessage}
                formValues={formValues}
            />
        </div>
    );
}

export default Chat;
