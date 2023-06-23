import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}


export const Sidebar = ({className}: SidebarProps) => {
    const { t } = useTranslation('translation');
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
                onClick={onToggle}>
                {t('Toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

