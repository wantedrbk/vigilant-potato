import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";



const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {} , [theme])}>
      <button onClick={toggleTheme}>dark/light</button> 
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
       </div>
  );
};

export default App;
