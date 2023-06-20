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
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>
                {t('Toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

