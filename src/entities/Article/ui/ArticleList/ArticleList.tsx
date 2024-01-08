import {Article, ArticleViewType} from './../../model/types/article'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import {useTranslation} from 'react-i18next'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import {memo} from 'react'

interface ArticleListProps {
	className?: string;
    view?: ArticleViewType
	articles: Article[]
	isLoading?: boolean
}

const getSkeletons = (view: ArticleViewType) => new Array(view === ArticleViewType.GRID ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={cls.card} key={index} view={view} />
	));

export const ArticleList = memo(({className, view = ArticleViewType.GRID, articles, isLoading}: ArticleListProps) => {
	const {t} = useTranslation()
	
	console.log(articles)
	
	if (isLoading) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				{getSkeletons(view)}
			</div>
		);
	}
	
    const renderArticle = (article : Article) => (
		<ArticleListItem key={article.id} article={article} view={view} className={cls.card}/>
	)
    
	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null}
		</div>
	)
})

