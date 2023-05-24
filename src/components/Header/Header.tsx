import './Header.scss';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('id');
        navigate('/sign-up');
    };
    return (
        <header className="header">
            <Link to={'/'}>
                <img className="header__logo" src={logo} alt="logo"></img>
            </Link>
            <div className="header__navigation">
                <Link to={'/services'} className="header__navigation_item">
                    Для заказчика
                </Link>
                <Link to={'/orders'} className="header__navigation_item">
                    Для исполнителя
                </Link>
                <Link to={'/developers'} className="header__navigation_item">
                    Фрилансеры
                </Link>
                <Link to={'/contacts'} className="header__navigation_item">
                    Контакты
                </Link>
            </div>
            <div className="header__block">
                <div className="tooltip-on-hover">
                    <Link to={'/orders/create'} className="header__block_button">
                        +
                    </Link>
                </div>
                <div className="tooltip">Создать заказ</div>
                <Link to={'/my/profile'} className="header__navigation header__navigation_item-pers">
                    Личный кабинет
                </Link>
                <IconButton onClick={handleLogout}>
                    <LogoutIcon />
                </IconButton>
            </div>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    <Link to={'/orders/create'} className="menu__item">
                        Для заказчика
                    </Link>
                    <Link to={'/orders/'} className="menu__item">
                        Для исполнителя
                    </Link>
                    <Link to={'/orders/'} className="menu__item">
                        Фрилансеры
                    </Link>
                    <Link to={'/orders/'} className="menu__item">
                        Контакты
                    </Link>
                    <Link to={'/my/profile'} className="menu__item">
                        Личный кабинет
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
