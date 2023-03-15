import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import CreateOrder from './pages/CreateOrder';
import { Provider } from 'react-redux';
import { store } from './redux/store'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/orders',
        element: <Order />,
    },
    // относится к заказу, поэтому перенести его
    {
        path: '/orders/create',
        element: <CreateOrder />,
    },
]);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
