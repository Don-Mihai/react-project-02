import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Home.scss";
// import home_picture from "./home_picture.png";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="home__container">
        <div className="home__top">
          <div className="home__top_titles">
            <h1 className="home__top_title">ФРИЛАНС БИРЖА</h1>
            <h2 className="home__top_subtitle">
              для поиска нужных друг другу людей
            </h2>
            <div className="home__top_buttons">
            <Link to={"orders/create"} className="home__top_button home__top_button-create">
                Создать заказ
              </Link>
              <Link to={"orders/"} className="home__top_button home__top_button-search">
                Найти работу
              </Link>
            </div>
          </div>
          <Link to={"/"}>
            <img
              className="home__top_picture"
              src={'/home_picture.png'}
              alt="people"
            ></img>
          </Link>
        </div>
        <div className="home__text">
          <div className="home__text_box">
            <h3 className="home__text_title"> Для заказчика</h3>
            <span className="home__text_list">
              <span className="home__text_list-dot">● </span>Бесплатно
              разместите ваши заказы
            </span>
            <span className="home__text_list">
              <span className="home__text_list-dot">● </span>Выберите
              понравившихся специалистов
            </span>
            <span className="home__text_list">
              <span className="home__text_list-dot">● </span>Договоритесь о
              сотрудничестве, обсудив все детали
            </span>
          </div>

          <div className="home__text_box">
            <h3 className="home__text_title">Для исполнителя</h3>
            <span className="home__text_list">
              <span className="home__text_list-dot">● </span>Найдите подходящие
              заказы
            </span>
            <span className="home__text_list">
              <span className="home__text_list-dot">● </span>Выберите то, что
              понравится
            </span>
            <span className="home__text_list">
              <span className="home__text_list-dot">● </span>Договоритесь о
              сотрудничестве, обсудив все детали
            </span>
          </div>
        </div>
        <div className="home__workers">
          <h3 className="home__workers_title">Фрилансеры</h3>
          <h4 className="home__workers_subtitle">
            База фрилансеров со всего мира для вашего бизнеса
          </h4>
        </div>
      </div>
      <Footer></Footer>
      {/* <Link to={"/orders/create"}>Создать заказ</Link> */}
    </div>
  );
};

export default Home;
