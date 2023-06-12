import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    console.log(classNames(cls.navbar, {}, [className]))
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={'/'}
                    className={cls.mainLink}>Главная страница</AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={'/about'}
                    className={cls.aboutLink}>О сайте</AppLink>
            </div>
        </div>
    );
};
