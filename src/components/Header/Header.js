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
            <Link to={'/orders'} className='header__navigation_item' >Личный кабинет</Link>
        </header>
    )
}

export default Header;