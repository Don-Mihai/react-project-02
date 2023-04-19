import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';
import Orders from '../../components/Orders/Orders';
import './Developers.scss';
import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { getUserById, getUsers } from '../../redux/user/user';

const Developers = () => {
    const users = useSelector((state: RootState) => state.user.users);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(Number(localStorage.getItem('id'))));
    }, []);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className="page-module">
            <Header></Header>
            <div className="page-module__body">
                <div className="page-module__container">
                    <h2 className="page-module__title">Фрилансеры</h2>
                    {users.map(user => (
                        <UserCard user={user}></UserCard>
                    ))}
                </div>

                <Filters></Filters>
            </div>
        </div>
    );
};

export default Developers;
