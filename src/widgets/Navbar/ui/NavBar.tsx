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
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={'/'}
                    className={cls.mainLink}>{t('main:Main_page')}</AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={'/about'}
                    className={cls.aboutLink}>{t('about:About_page')}</AppLink>
            </div>
        </div>
    );
};
