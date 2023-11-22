import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import {configureStore} from "@reduxjs/toolkit"
import MovieDetail from './components/MovieDetail/MovieDetail';
import Home from './components/Home';
import movieSlice from './StoreSlices/movieSlice';
import { Provider } from 'react-redux';
import MovieCarousel from './components/Movielist/MovieCarousel';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Logout from './Authentication/Logout';
import PrivateRouter from './components/Privaterouter';
import ForgotPassword from './Authentication/ForgotPassword';

const store=configureStore({
  reducer:{
    Movies:movieSlice

  }
})
const AppRouter=createBrowserRouter([
  {
  path:"/" ,
   element:<App />,
   children:[
    {
path:"/",
element:<Home/>
    },
    {
      path:"/movie",
      element:<MovieCarousel/>
    },
    {

 path:"/movie/:imdbID",
 element:<MovieDetail/>
   },
   {
    path:"/sign-up",
    element:<SignUp/>
   }
   ,{
    path:"/login",
    element:<Login/>
   }
   ,{
    path:"/logout",
    element:<Logout/>

   }
   ,{
    path:"/forgot-password",
    element:<ForgotPassword/>
   }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
