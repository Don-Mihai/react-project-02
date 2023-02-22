import './Header.scss'
import logo from './logo.png';

const Header = () => {

    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo'></img>
            <div className='header__navigation'>
            <a className='header__navigation_item' href='/'>Для заказчика</a>
            <a className='header__navigation_item' href='/'>Для исполнителя</a>
            <a className='header__navigation_item' href='/'>Фрилансеры</a>
            <a className='header__navigation_item' href='/'>Контакты</a>
            </div>
            <a className='header__navigation_item-last-child' href='/'>Личный кабинет</a>
        </header>
    )
}

export default Header;