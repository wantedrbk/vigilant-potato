import {classNames} from 'shared/lib/classNames/classNames'
import {ArticleType} from '../../model/types/article'
import { useCallback, useMemo} from 'react'
import {SelectOption} from 'shared/ui/Select/Select'
import {TabItem, Tabs} from 'shared/ui/Tabs/Tabs'
import {useTranslation} from 'react-i18next'

interface ArticleTypeSelectorProps {
    value: ArticleType;
	onChangeType: (type: ArticleType) => void;
	className?: string;
}


export const ArticleTypeSelector = ({className, value, onChangeType}: ArticleTypeSelectorProps) => {
	
	const { t } = useTranslation();
	
	const tabTypes = useMemo<SelectOption<ArticleType>[]>(() => {
		return Object.values(ArticleType).map((type) => ({
			value: type,
			content: t(`${type.toLowerCase()}`),
		}));
	}, [t]);
	
	const onTabClick = useCallback((tab: TabItem<string>) => {
		onChangeType(tab.value as ArticleType);
	}, [onChangeType]);
	
	return (
		<Tabs
			tabs={tabTypes}
			value={value}
			onTabClick={onTabClick}
			className={classNames('', {}, [className])}
		/>
	)
}

