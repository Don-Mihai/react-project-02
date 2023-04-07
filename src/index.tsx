import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Orders/Order';
import CreateOrder from './pages/CreateOrder';
import Registration from './pages/Registration/Registration';
import Authorization from './pages/Authorization/Authorization';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Profile from './pages/Profile/Profile';
import ProfileOrders from './pages/ProfileOrders/ProfileOrders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    // todo: переименовать название и адрес в performer(для для исполнителя в переводе с англ), тоесть тсраничка с заказами [1]
    {
        path: '/orders',
        element: <Order />,
    },
    {
        path: '/orders/create',
        element: <CreateOrder />,
    },
    {
        path: '/sign-up',
        element: <Registration />,
    },
    {
        path: '/sign-in',
        element: <Authorization />,
    },
    {
        path: '/my/profile',
        element: <Profile />,
    },
    {
        path: '/my/orders',
        element: <ProfileOrders />,
    },
]);

// todo: сделать роутинг страницы для заказчика(страница с услугами), фрилансеры, контакты [2]

// todo: создать пустую страничку 'для заказчика' (услуги) [1]
// todo: создать пустую страничку 'контакты' [1]

// example

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
