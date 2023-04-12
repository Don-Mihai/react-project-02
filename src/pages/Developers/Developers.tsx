import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';
import Orders from '../../components/Orders/Orders';
import './Developers.scss';
import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { getUserById } from '../../redux/user/user';

const Developers = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserById(Number(localStorage.getItem('id'))));
    }, []);

    return (
        <div className="page-module">
            <Header></Header>
            <div className="page-module__body">
                Фрилансеры
                <UserCard user={user}></UserCard>
                <Filters></Filters>
            </div>
        </div>
    );
};

export default Developers;
