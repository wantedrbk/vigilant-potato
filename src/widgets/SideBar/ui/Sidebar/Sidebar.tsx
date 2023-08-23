import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, {memo, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher'
import {Button, ButtonSize, ThemeButton} from 'shared/ui/Button/Button'
import {SideBarItemsList} from '../../model/items'
import {SidebarItem} from '../SidebarItem/SidebarItem'

interface SidebarProps {
	className?: string
}

export const Sidebar = memo(({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const onToggle = async () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div
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
			<div className={cls.items}>
				{SideBarItemsList.map((item) => (
					<SidebarItem
						key={item.path}
						item={item}
						collapsed={collapsed}
					/>
				))}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					className={cls.lang}
					short={collapsed}
				/>
			</div>
		</div>
	)
})
