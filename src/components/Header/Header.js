import './Header.scss'
import logo from './logo.png';
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header className='header'>
            <Link to={'/'}><img className='header__logo' src={logo} alt='logo'></img></Link>
            <div className='header__navigation'>
            <Link to={'/orders'} className='header__navigation_item' >Для заказчика</Link>
            <Link to={'/orders'} className='header__navigation_item' >Для исполнителя</Link>
            <Link to={'/orders'} className='header__navigation_item' >Фрилансеры</Link>
            <Link to={'/orders'} className='header__navigation_item' >Контакты</Link>
            </div>
            <Link to={'/orders'} className='header__navigation_item-pers' >Личный кабинет</Link>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    <Link to={'/orders/create'} className="menu__item">Для заказчика</Link>
                    <Link to={'/orders/'} className="menu__item">Для исполнителя</Link>
                    <Link to={'/orders/'} className="menu__item">Фрилансеры</Link>
                    <Link to={'/orders/'} className="menu__item">Контакты</Link>
                    <Link to={'/orders/'} className="menu__item">Личный кабинет</Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;