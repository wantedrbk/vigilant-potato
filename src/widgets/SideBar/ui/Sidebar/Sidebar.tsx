import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, {memo, useMemo, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher'
import {Button, ButtonSize, ThemeButton} from 'shared/ui/Button/Button'
import {SidebarItem} from '../SidebarItem/SidebarItem'
import {getSideBarItems} from 'widgets/SideBar/model/selector/getSidebarItems'
import { useSelector } from 'react-redux'

interface SidebarProps {
	className?: string
}

export const Sidebar = memo(({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const SideBarItemsList = useSelector(getSideBarItems)
	const onToggle = async () => {
		setCollapsed((prev) => !prev)
	}

	const itemList = useMemo(
		() =>
			SideBarItemsList.map((item) => (
				<SidebarItem
					key={item.path}
					item={item}
					collapsed={collapsed}
				/>
			)),
		[collapsed, SideBarItemsList]
	)

	return (
		<menu
			data-testid='sidebar'
			className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ThemeButton.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
				{/*{t('Toggle')}*/}
			</Button>
			<div className={cls.items}>{itemList}</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					className={cls.lang}
					short={collapsed}
				/>
			</div>
		</menu>
	)
})
