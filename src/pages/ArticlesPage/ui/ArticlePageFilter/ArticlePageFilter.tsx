import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePageFilter.module.scss'
import {Card} from 'shared/ui/Card/Card'
import {Input} from 'shared/ui/Input/Input'
import {useTranslation} from 'react-i18next'
import {ArticleSortSelector} from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import {ArticleViewSelector, ArticleViewType} from 'entities/Article'
import {useSelector} from 'react-redux'
import {getArticlePageType, getArticlesPageView} from 'pages/ArticlesPage'
import { useCallback} from 'react'
import {articlePageActions} from 'pages/ArticlesPage/models/slices/ArticlePageSlice'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {
	getArticlePageOrder,
	getArticlePageSearch,
	getArticlePageSort
} from 'pages/ArticlesPage/models/selectors/articleSelectors'
import {fetchAllArticles} from 'pages/ArticlesPage/models/services/fecthAllArticles'
import {useDebounce} from 'shared/lib/hooks/useDebounce'
import {SortOrder} from 'shared/types'
import {ArticleSortField, ArticleType} from 'entities/Article/model/types/article'
import {ArticleTypeSelector} from 'entities/Article'

interface ArticlePageFilterProps {
	className?: string
}

export const ArticlePageFilter = ({className}: ArticlePageFilterProps) => {
	const {t} = useTranslation()
	const dispatch = useAppDispatch()
	const view = useSelector(getArticlesPageView)
	const order = useSelector(getArticlePageOrder)
	const sort = useSelector(getArticlePageSort)
	const search = useSelector(getArticlePageSearch)
	const type = useSelector(getArticlePageType)
	
	const fetchData = useCallback(() => {
		dispatch(fetchAllArticles({ replace: true}))
	},[dispatch])
	
	const onViewChange = useCallback(
		(view: ArticleViewType) => {
			dispatch(articlePageActions.setView(view))
			fetchData()
		},
		[dispatch, fetchData]
	)
	
	const debouncedfetchData = useDebounce({callback: fetchData, delay: 500})
	
	const onChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlePageActions.setSearch(search))
			debouncedfetchData()
		},
		[dispatch, debouncedfetchData]
	)

	const onChangeOrder = useCallback(
		(order: SortOrder) => {
			dispatch(articlePageActions.setPage(1))
			dispatch(articlePageActions.setOrder(order))
			fetchData()
		},
		[dispatch, fetchData]
	)

	const onChangeSort = useCallback(
		(sort: ArticleSortField) => {
			dispatch(articlePageActions.setPage(1))
			dispatch(articlePageActions.setSort(sort))
			fetchData()
		},
		[dispatch, fetchData]
	)
	const onChangeType = useCallback(
		(type: ArticleType) => {
			dispatch(articlePageActions.setPage(1))
			dispatch(articlePageActions.setType(type))
			fetchData()
		},
		[dispatch, fetchData]
	)
	

	return (
		<div className={classNames(cls.ArticlePageFilter, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					changeSort={onChangeSort}
					changeOrder={onChangeOrder}
				/>
				<ArticleViewSelector
					view={view}
					onViewChange={onViewChange}
				/>
			</div>
			<Card className={cls.search}>
				<Input
					onChange={onChangeSearch}
					value={search}
					placeholder={t('Поиск')}
				/>
			</Card>
			<ArticleTypeSelector
				value={type}
				onChangeType={onChangeType}
				className={cls.tabs}/>
		</div>
	)
}
