import {Article, ArticleViewType} from './../../model/types/article'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import {useTranslation} from 'react-i18next'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import {memo} from 'react'
import {Text, TextAlign, TextSize, TextTheme} from 'shared/ui/Text/Text'

interface ArticleListProps {
	className?: string;
    view?: ArticleViewType
	articles: Article[]
	isLoading?: boolean
	error?: string | null
}

const getSkeletons = (view: ArticleViewType) => new Array(view === ArticleViewType.GRID ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={cls.card} key={index} view={view} />
	));

export const ArticleList = memo(({className, view = ArticleViewType.GRID, articles, isLoading, error}: ArticleListProps) => {
	const {t} = useTranslation()
	
	if (error) {
		return (
			<div>No articles</div>
		)
	}
	
	if(!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<Text text={t('empty articles')}
				  theme={TextTheme.PRIMARY}
				  size={TextSize.L}
				  className={cls.empty}
				/>
			</div>
		)
	}
	
    const renderArticle = (article : Article) => (
		<ArticleListItem key={article.id} article={article} view={view} className={cls.card}/>
	)
    
	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null}
			{isLoading && getSkeletons(view)}
		</div>
	)
})

