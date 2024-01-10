import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import {ArticleViewType} from 'entities/Article'
import GridIcon from 'shared/assets/icons/grid-20-20.svg'
import ListIcon from 'shared/assets/icons/list-20-20.svg'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import {memo} from 'react'


interface ArticleViewSelectorProps {
	className?: string;
    view?: ArticleViewType
    onViewChange: (view: ArticleViewType) => void
}

const viewTypes = [
	{
		view: ArticleViewType.GRID,
		icon: GridIcon
	},
	{
		view: ArticleViewType.LIST,
		icon: ListIcon
	},
]

export const ArticleViewSelector = memo(({view , onViewChange, className}: ArticleViewSelectorProps) => {
	
	
	const onClick = (newView: ArticleViewType) => () => {
		onViewChange?.(newView);
	};
	
	return (
		<div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                {viewTypes.map((viewType) => (
                    <Button key={viewType.view} theme={ThemeButton.CLEAR} onClick={onClick(viewType.view)}>
						<Icon Svg={viewType.icon} className={classNames('', {[cls.notSelected]: viewType.view !== view})}
						/>
                    </Button>
            ))}
		</div>
	)
})

