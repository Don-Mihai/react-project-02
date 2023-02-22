import './Header.scss'
import logo from './logo.png';
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header className='header'>
            <Link to={'/'}><img className='header__logo' src={logo} alt='logo'></img></Link>
            <div className='header__navigation'>
            <Link to={'/orders'} className='header__navigation_item' >Для заказчика</Link>
            <a className='header__navigation_item' href='/'>Для исполнителя</a>
            <a className='header__navigation_item' href='/'>Фрилансеры</a>
            <a className='header__navigation_item' href='/'>Контакты</a>
            </div>
            <a className='header__navigation_item-last-child' href='/'>Личный кабинет</a>
        </header>
    )
}

export default Header;