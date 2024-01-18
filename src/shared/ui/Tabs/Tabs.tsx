import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import {memo, ReactNode, useCallback} from 'react'
import {Card, CardTheme} from 'shared/ui/Card/Card'

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = memo(<T extends string>(props: TabsProps<T>) => {
    const {
        className, tabs, onTabClick, value,
    } = props;
    
    const clickHandle = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab);
    }, [onTabClick]);
    
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
