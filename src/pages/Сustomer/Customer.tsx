import Header from '../../components/Header/Header';
import './Customer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

interface Message {
    sender: any;
    recipient: any;
    content: string;
    timestamp: Date;
}

const Customer = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [formValues, setFormValues] = useState<Partial<Message>>({ content: '' });
    const user = useSelector((state: RootState) => state.user.currentUser);

    useEffect(() => {
        const interval = setInterval(() => {
            subcribe();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const subcribe = async () => {
        const data = await axios.get('/message/messages');
        setMessages(data.data);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleSendMessage = () => {
        const payload: Partial<Message> = {
            content: formValues.content,
            // @ts-ignore
            sender: user._id,
            recipient: '6467a9663e4cf1b3b4c3b215',
        };
        axios.post('/message/send', payload);
    };

    return (
        <div className="page-module">
            <Header></Header>
            <div>
                <div className="page-module__container">
                    <h2 className="page-module__title">Чат</h2>

                    {messages.map(message => {
                        return <h2 style={{ border: '1px solid #333' }}>{message.content}</h2>;
                    })}
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <TextField onChange={handleChange} value={formValues.content} name="content" />
                    <Button onClick={handleSendMessage}>Отправить</Button>
                </div>
            </div>
        </div>
    );
};

export default Customer;
