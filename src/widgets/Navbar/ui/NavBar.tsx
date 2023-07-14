import React from "react"
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation(['about','main'])
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
