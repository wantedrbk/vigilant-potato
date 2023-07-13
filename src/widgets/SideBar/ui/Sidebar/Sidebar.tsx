import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";
import {Button, ButtonSize, ThemeButton} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/ routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
    className?: string;
}


export const Sidebar = ({className}: SidebarProps) => {
    // const { t } = useTranslation('translation');
    const {t} = useTranslation(['about','main'])
  
    const [collapsed, setCollapsed] = useState(false)
    
    const onToggle = async () => {
        setCollapsed(prev => !prev)
    }
    
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
                {/*{t('Toggle')}*/}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={RoutePath.main}
                    className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('main:Main_page')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={RoutePath.about}
                    className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('about:About_page')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </div>
    );
};

