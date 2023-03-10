import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import CreateOrder from './pages/CreateOrder';


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

root.render(<RouterProvider router={router} />);
