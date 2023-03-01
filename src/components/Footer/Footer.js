import "./Footer.scss";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";
import icons from "./icons.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__item_icons">
        <Link to={"/"}>
          <img className="header__logo" src={logo} alt="logo"></img>
        </Link>
        <div className="footer__item_media">
          <span className="footer__item_media-text">
            Подписывайтесь в соцсетях
          </span>
          <Link to={"/"}>
            <img
              className="footer__item_media-icon"
              src={icons}
              alt="icons"
            ></img>
          </Link>
        </div>
      </div>
      <div className="footer__navigation">
        <Link to={"/"} className="footer__navigation_item">
          Для заказчика
        </Link>
        <Link to={"/"} className="footer__navigation_item">
          Для исполнителя
        </Link>
        <Link to={"/"} className="footer__navigation_item">
          Фрилансеры
        </Link>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts_block">
          <Link to={"/"} className="footer__contacts_info">
            Tel
          </Link>
          <Link to={"/"} className="footer__contacts_info">
            Mail
          </Link>
          <span className="footer__contacts_info">Adress</span>
        </div>
        <div className="footer__info">
          <span className="footer__info_text">Политика конфиденциальности</span>
          <span className="footer__info_text">
            Соглашение на обработку персональных данных
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
