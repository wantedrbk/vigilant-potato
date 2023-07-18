import React, {Suspense, useState} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/Navbar";
import {Sidebar} from "widgets/SideBar";
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const {theme} = useTheme()
    
    return (
        <div className={classNames('app', {} , [theme])}>
            <Suspense fallback="">
                <NavBar />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
