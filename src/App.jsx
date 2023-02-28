import React from 'react'
import Body from './Components/Body/Body'
import Header from './Components/Header/Header'
import Error from './Components/ErrorPage/Error'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Restaurantpage from './Components/RestaurantPage/Restaurantpage'
import { Provider } from 'react-redux';
import store from '../utils/store'
import Cart from './Components/Cart/Cart'



const App = () => {
  return (
    <>
  <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  )
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/Restaurant/:id",
        element: <Restaurantpage />
      }
    ]
  },
  
])



export default App