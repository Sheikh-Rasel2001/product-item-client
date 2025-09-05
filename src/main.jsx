import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import ProductDetail from './Component/ProductDetail.jsx';
import EditProduct from './Component/EditProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: App},
      {
        path: 'details/:id',
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetail
      },
      {
        path: 'update/:id',
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: EditProduct
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
