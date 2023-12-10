import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Product from '../components/Product'
import Cart from '../components/Cart'
import ErrorPage from '../components/ErrorPage'
import Root from './Root'

export const router = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/product-detail",
                element: <Product />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <ErrorPage />,
            },
        ]
    }
]);